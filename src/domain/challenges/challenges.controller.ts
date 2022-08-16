import { Request, Response } from "express";
import ChallengesService from "./challenges.service";

const ChallengeController = {
  async getChallengeById(req: Request, res: Response) {
    try {
      let id = req.params.id;

      let data = await ChallengesService.getChallengeById(id);

      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({
        message: err.message,
      });
    }
  },
  async getAllChallenges(req: Request, res: Response) {
    try {
      let data = await ChallengesService.getAllChallenges();

      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({
        message: err.message,
      });
    }
  },
};

export default ChallengeController;
