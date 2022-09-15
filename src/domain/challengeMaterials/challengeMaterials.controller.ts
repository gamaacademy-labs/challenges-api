import { Request, Response } from "express";
import ChallengeMaterialsService from "./challengeMaterials.service";

const ChallengeMaterialsController = {
    async getMaterialsByChallenge(req: Request, res: Response) {
        try {
            let challengeId = req.params.challengeId;

            let data = await ChallengeMaterialsService.getMaterialsByChallenge(challengeId);

            res.status(200);
            res.json(data);
            
        } catch (err: any) {
            res.status(400);
            res.json({
                message: err.message
            });
        }
    }
}

export default ChallengeMaterialsController;