import {RequestHandler} from "express";
let axios = require("axios")

const externalRequestUrl = /((https?:\/\/)re\.jrc\.ec\.europa\.eu.+)|((https?:\/\/)nominatim\.openstreetmap\.org.+)/

export const relayAPIRequest:RequestHandler = ((req,res, next) => {
    if (externalRequestUrl.test(req.body.url)) return res.send(403)

    if(req.body.method == "GET"){
        axios.get(req.body.url)
            .then((result:any) => res.json(result.data))
            .catch((error:any) => console.error(error))
    } else {
        return res.send(403)
    }
})




