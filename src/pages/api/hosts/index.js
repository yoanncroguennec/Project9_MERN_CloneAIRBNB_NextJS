// CONFIG DB
import db from "../server/config/db";
import NextCors from "nextjs-cors";
// CONTROLLERS
import {
  getAllHosts,
  postHost,
  putHost,
  deleteHost,
} from "../server/controllers/HostCtrl";

export default async function handler(req, res) {
    await db.connect();

   await NextCors(req, res, {
     methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
     origin: "*",
     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });

    // type of request
    const { method } = req

    switch(method){
        case 'GET' :
            getAllHosts(req, res);
            break;
        case 'POST':
            postHost(req, res);
            break;
        case 'PUT':
            putHost(req, res);
            break;
        case 'DELETE':
            deleteHost(req, res);
            break;
        default : 
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowd`)
            break;
    }
  }
  