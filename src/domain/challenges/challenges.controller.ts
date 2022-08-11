import { Request, Response } from "express";
import ChallengesService from "./challenges.service";

const ChallengeController = {
    async getChallengeByName(req: Request, res: Response) {
        try {
            let tittle = req.params.tittle

            let data = await ChallengesService.getChallengeByName(tittle)

            res.status(200)
            res.json(data)
        } catch (err: any) {
            res.status(400)
            res.json({
                message: err.message
            })
        }
    }
}

export default ChallengeController