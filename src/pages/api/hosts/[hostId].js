// CONFIG DB
import db from "../server/config/db";
// CONTROLLERS
import {
  getHost,
  putContact,
  deleteContact,
} from "../server/controllers/HostCtrl";


export default async function handler(req, res) {
    
        await db.connect();


        // type of request
        const { method } = req

        switch (method){
            case "GET":
                getHost(req, res);
                break;
            case 'PUT':
                putContact(req, res);
                break;
            case 'DELETE':
                deleteContact(req, res);
                break;
            default : 
                res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
                res.status(405).end(`Method ${method} Not Allowd`)
                break;
        }
}