import {RequestHandler} from "express";
import axios from "axios";

const RELAY_URLS = /((https?:\/\/)re\.jrc\.ec\.europa\.eu.+)|((https?:\/\/)nominatim\.openstreetmap\.org.+)/;

export const relayAPIRequest:RequestHandler = ((req,res, next) => {
    if (RELAY_URLS.test(req.body.url)) return res.send(403)
    if(req.body.method == "GET"){
        axios.get(req.body.url)
            .then((result:any) => res.json(result.data))
            .catch((error:any) => console.error(error))
    } else {
        return res.send(403)
    }


})




