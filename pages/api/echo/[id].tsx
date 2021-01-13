import {NextApiRequest, NextApiResponse} from "next";

interface YourIdNextApiRequest extends NextApiRequest {
    query: {
       id: {
           yourId: number
       }
   }
}

export default function getById(req: YourIdNextApiRequest, res: NextApiResponse) {
    // res.statusCode = 200,
    // res.setHeader('Content-Type', 'application/json')
    // res.end(req.query.id)
    res.json({yourId: req.query.id})
}