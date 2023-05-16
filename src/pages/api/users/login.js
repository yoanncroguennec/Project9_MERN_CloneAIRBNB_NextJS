import { postLogin } from "../server/controllers/UserCtrl";

export default async function handler (req, res) {

      // type of request
    const { method } = req

      switch(method){
        case 'POST' :
            postLogin(req, res);
            break;
        default : 
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${method} Not Allowd`)
            break;
    }
  }
  