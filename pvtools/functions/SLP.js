
/**
 * "Standardlastprofil Berechnung nach BDEW"
 * weekdays = weekDays (mon - fri)
 * sat = saturday
 * sun = sunday and free days
 * default = if sat/sun/weekdays not set, default will be used
 *
 * till = FIRST day this season will change. 03/21 means, this will be used until 03/20 (Bug?)
 */



const SLPH0 = [
    {
        till: "03/21",

        profileDays : {
            sat: {
                0:	74.75,
                1:	57.075,
                2:	43.55,
                3:	40.125,
                4:	38.675,
                5:	39.05,
                6:	48.3,
                7:	73.425,
                8:	110.55,
                9:	138.575,
                10:	146.6,
                11:	152.7,
                12:	163.9,
                13:	167.9,
                14:	156.575,
                15:	145.65,
                16:	142.25,
                17:	168.85,
                18:	205.875,
                19:	212.2,
                20:	185.05,
                21:	139.925,
                22:	125,
                23:	109.95,
            },
            sun: {
                0:	79.2,
                1:	61.075,
                2:	46.725,
                3:	41.975,
                4:	39.15,
                5:	38.425,
                6:	40.125,
                7:	46.025,
                8:	75.85,
                9:	127.25,
                10:	166.275,
                11:	196.525,
                12:	209.625,
                13:	183.625,
                14:	143.625,
                15:	120.35,
                16:	107.725,
                17:	117.8,
                18:	149.75,
                19:	173.15,
                20:	167.825,
                21:	139.9,
                22:	121.2,
                23:	92.325,
            },
            weekdays: {
                0:	64.55,
                1:	45.4,
                2:	39.975,
                3:	38.7,
                4:	38.7,
                5:	42.925,
                6:	76.15,
                7:	123.575,
                8:	134.525,
                9:	126.125,
                10:	117.05,
                11:	116.875,
                12:	127.375,
                13:	132.175,
                14:	118.675,
                15:	106.9,
                16:	103.35,
                17:	120.55,
                18:	157.025,
                19:	185.175,
                20:	175.925,
                21:	146.575,
                22:	123.55,
                23:	94.1,
            }
        }
    },
    {
        till: "05/15",
        profileDays : {
            sat: {
                0:	81.875,
                1:	60.25,
                2:	47.925,
                3:	44.175,
                4:	43.15,
                5:	44.125,
                6:	53.375,
                7:	83.05,
                8:	121.975,
                9:	146.425,
                10:	160.35,
                11:	169.95,
                12:	179.1,
                13:	180.55,
                14:	165.25,
                15:	151.15,
                16:	145.7,
                17:	154.8,
                18:	177.025,
                19:	196.8,
                20:	187.875,
                21:	154.4,
                22:	139,
                23:	125.45,
            },
            sun: {
                0:	85.525,
                1:	67.4,
                2:	50.95,
                3:	45.1,
                4:	43.175,
                5:	43.275,
                6:	44.275,
                7:	58.05,
                8:	98.125,
                9:	149.125,
                10:	180.5,
                11:	199.975,
                12:	211.125,
                13:	180.7,
                14:	141.225,
                15:	124.975,
                16:	109.8,
                17:	108.225,
                18:	130.05,
                19:	157.175,
                20:	158.7,
                21:	145.6,
                22:	133.875,
                23:	102.925,
            },
            weekdays: {
                0:	74.1,
                1:	51.675,
                2:	45.1,
                3:	43.1,
                4:	43.65,
                5:	48.45,
                6:	80.225,
                7:	123.9,
                8:	137.075,
                9:	136.575,
                10:	133.075,
                11:	131.6,
                12:	145.225,
                13:	150.025,
                14:	130.725,
                15:	116.525,
                16:	106.775,
                17:	111.75,
                18:	136.725,
                19:	167.125,
                20:	171.8,
                21:	158.25,
                22:	142.975,
                23:	109.4,
            }
        }
    },
    {
        till: "09/15",
        profileDays : {
            sat: {
                0:	91.1,
                1:	69.125,
                2:	53.975,
                3:	50.25,
                4:	50.275,
                5:	51.025,
                6:	58.925,
                7:	84.575,
                8:	119.825,
                9:	150.35,
                10:	164.025,
                11:	168.625,
                12:	180.05,
                13:	179.7,
                14:	161.55,
                15:	149.425,
                16:	145.65,
                17:	146.45,
                18:	161.5,
                19:	178.525,
                20:	176.85,
                21:	157.975,
                22:	149.225,
                23:	134.025,
            },
            sun: {
                0:	92.525,
                1:	71.65,
                2:	56.35,
                3:	51.225,
                4:	49.975,
                5:	49.175,
                6:	49.675,
                7:	62.825,
                8:	99.775,
                9:	149.825,
                10:	181.825,
                11:	200.95,
                12:	211.925,
                13:	186.2,
                14:	149.5,
                15:	129.575,
                16:	111.075,
                17:	107.475,
                18:	121.225,
                19:	146,
                20:	160.25,
                21:	152.8,
                22:	143.725,
                23:	118.475,
            },
            weekdays: {
                0:	82.125,
                1:	57.325,
                2:	50.8,
                3:	47.3,
                4:	47.75,
                5:	54.9,
                6:	86.025,
                7:	124.95,
                8:	139.125,
                9:	144.7,
                10:	140.275,
                11:	139.875,
                12:	153.85,
                13:	157.275,
                14:	136.35,
                15:	121.275,
                16:	114.775,
                17:	119.375,
                18:	136.35,
                19:	160.375,
                20:	168.65,
                21:	159.4,
                22:	149.275,
                23:	121.875,
            }
        }
    },
    {
        till: "11/01",
        profileDays : {
            sat: {
                0:	81.875,
                1:	60.25,
                2:	47.925,
                3:	44.175,
                4:	43.15,
                5:	44.125,
                6:	53.375,
                7:	83.05,
                8:	121.975,
                9:	146.425,
                10:	160.35,
                11:	169.95,
                12:	179.1,
                13:	180.55,
                14:	165.25,
                15:	151.15,
                16:	145.7,
                17:	154.8,
                18:	177.025,
                19:	196.8,
                20:	187.875,
                21:	154.4,
                22:	139,
                23:	125.45,
            },
            sun: {
                0:	85.525,
                1:	67.4,
                2:	50.95,
                3:	45.1,
                4:	43.175,
                5:	43.275,
                6:	44.275,
                7:	58.05,
                8:	98.125,
                9:	149.125,
                10:	180.5,
                11:	199.975,
                12:	211.125,
                13:	180.7,
                14:	141.225,
                15:	124.975,
                16:	109.8,
                17:	108.225,
                18:	130.05,
                19:	157.175,
                20:	158.7,
                21:	145.6,
                22:	133.875,
                23:	102.925,
            },
            weekdays: {
                0:	74.1,
                1:	51.675,
                2:	45.1,
                3:	43.1,
                4:	43.65,
                5:	48.45,
                6:	80.225,
                7:	123.9,
                8:	137.075,
                9:	136.575,
                10:	133.075,
                11:	131.6,
                12:	145.225,
                13:	150.025,
                14:	130.725,
                15:	116.525,
                16:	106.775,
                17:	111.75,
                18:	136.725,
                19:	167.125,
                20:	171.8,
                21:	158.25,
                22:	142.975,
                23:	109.4,
            }
        }
    },
    {
        till: "12/31",
        last: true,
        profileDays : {
            sat: {
                0:	74.75,
                1:	57.075,
                2:	43.55,
                3:	40.125,
                4:	38.675,
                5:	39.05,
                6:	48.3,
                7:	73.425,
                8:	110.55,
                9:	138.575,
                10:	146.6,
                11:	152.7,
                12:	163.9,
                13:	167.9,
                14:	156.575,
                15:	145.65,
                16:	142.25,
                17:	168.85,
                18:	205.875,
                19:	212.2,
                20:	185.05,
                21:	139.925,
                22:	125,
                23:	109.95,
            },
            sun: {
                0:	79.2,
                1:	61.075,
                2:	46.725,
                3:	41.975,
                4:	39.15,
                5:	38.425,
                6:	40.125,
                7:	46.025,
                8:	75.85,
                9:	127.25,
                10:	166.275,
                11:	196.525,
                12:	209.625,
                13:	183.625,
                14:	143.625,
                15:	120.35,
                16:	107.725,
                17:	117.8,
                18:	149.75,
                19:	173.15,
                20:	167.825,
                21:	139.9,
                22:	121.2,
                23:	92.325,
            },
            weekdays: {
                0:	64.55,
                1:	45.4,
                2:	39.975,
                3:	38.7,
                4:	38.7,
                5:	42.925,
                6:	76.15,
                7:	123.575,
                8:	134.525,
                9:	126.125,
                10:	117.05,
                11:	116.875,
                12:	127.375,
                13:	132.175,
                14:	118.675,
                15:	106.9,
                16:	103.35,
                17:	120.55,
                18:	157.025,
                19:	185.175,
                20:	175.925,
                21:	146.575,
                22:	123.55,
                23:	94.1,
            }
        }
    },
]

const factorFunction = (day, val) => {
    const a4 = -0.000000000392;
    const a3 = 0.00000032;
    const a2 = -0.0000702;
    const a1 = 0.0021;
    const a0 = 1.24;

    return (a4*Math.pow(day,4)+a3*Math.pow(day,3)+a2*Math.pow(day,2)+a1*day+a0) * val
}

module.exports = {
    PROFILEBASE: 1000,
    SLPH0,
    factorFunction
}
