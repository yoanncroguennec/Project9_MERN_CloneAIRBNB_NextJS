// CONFIG DB
import db from "../server/config/db";
// CONTROLLERS
import { getHost, putHost, deleteHost } from "../server/controllers/HostCtrl";


export default async function handler(req, res) {
    
        await db.connect();


        // type of request
        const { method } = req

        switch (method){
            case "GET":
                getHost(req, res);
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