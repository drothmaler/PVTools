
/** @typedef {import("./energyFlow.js").FactorFunction} FactorFunction */

/**
 * @typedef {Record<number, number>} DayProfile
 */

/**
 * @typedef {SeasonLoadProfile[]} LoadProfile
 */

/**
 * @typedef {object} SeasonLoadProfile
 * @property {string} till FIRST day this season will change. 03/21 means, this will be used until 03/20 (Bug?)
 * @property {boolean} [last] indicates, that this is the last profile - so it should be used for the rest of the year
 * @property {object} profileDays
 * @property {DayProfile} [profileDays.sat] saturday
 * @property {DayProfile} [profileDays.sun] sunday and free days
 * @property {DayProfile} [profileDays.weekdays] weekDays (mon - fri) profile data
 * @property {DayProfile} [profileDays.default] if sat/sun/weekdays not set, default will be used
 */

/**
 * Calculate an consumptionProfile per hour from a profile definition
 * @function calcProfile
 * @param  {object}           params
 * @param  {LoadProfile}      params.profile                  Loadprofile Array [{till: "03/21",profileDays:{weekdays:{0:50,1:45, ... 23:55},sat:{0:44 ... 23:44},sun:{0:44 ... 23:44},}},{till:...}]
 * @param  {number}           params.year                     The year which should be calculated (leap year in mind)
 * @param  {number}           params.consumptionYear          Consumption in this year in kWh
 * @param  {number}           params.profileBase              Consumption on which the profile is calculated. Default: 1000kWh per year
 * @param  {FactorFunction}   params.factorFunction           Optional: used to calculate the power with a function. Is needed for calculaion "Standardlastprofil nach BDEW"
 * @return {Record<string,object>}                         {"20200101:00":{P:20}, "20200101:01":{P:30.5}, ...}
 * @property {number} P
 */

const calcProfile = ({year, consumptionYear, profile, profileBase = 1000, factorFunction}) => {

    // IF profil is based on 1000kWh per year, it must be multiplied by difference of real consumption (e.g. 5000kWh = multiplier 5x)
    const consumptionFactor = consumptionYear / profileBase
    let currentDay = new Date(Date.UTC(year,    0, 1,0,0))
    const lastDay = new Date(Date.UTC(year + 1, 0, 1,0,0))

    const days = {}
    // Needed for factorFunction "Standardlastprofil BDEW"
    let dayTimer = 1

    while (currentDay <= lastDay) {


        let currentProfile = profile
        .find(season => new Date(season.till + "/" + year ) >= currentDay) // TODO/BUG: this finds the next season one day earlier (03/21 is falsy at currentDay 03/21)

        if (!currentProfile) {                  //TODO/BUG: The date "till: 12/31" aren't find correctly.
            currentProfile = profile
            .find(season => season.last)
        }

        for (let hour = 0; hour < 24; hour++) {

            const timeString = `${year}${('00' + (currentDay.getMonth() + 1)).slice(-2)}${('00' + (currentDay.getDate())).slice(-2)}:${('00' + hour).slice(-2)}`
            let consumption
            switch (currentDay.getDay()) {      // find the right day for profile | 0 = sun, 1 = mon, ..., 6 = sat
                case 0:
                    consumption = currentProfile.profileDays['sun'][hour] || currentProfile.profileDays['default'][hour]
                    break;
                case 6:
                    consumption = currentProfile.profileDays['sat'][hour] || currentProfile.profileDays['default'][hour]
                    break;

                default:
                    consumption = currentProfile.profileDays['weekdays'][hour] || currentProfile.profileDays['default'][hour]
                    break;
            }

            if (factorFunction){                // if function set, use function for "Standardlastprofil BDEW"

                days[timeString] = {P:factorFunction(dayTimer, consumption * consumptionFactor)}
            }
            else {

                days[timeString] = {P:consumption * consumptionFactor}
            }

        }
        currentDay.setDate(currentDay.getDate() + 1)    // set one day after
        dayTimer++

    }
    return days
}

module.exports = calcProfile;
