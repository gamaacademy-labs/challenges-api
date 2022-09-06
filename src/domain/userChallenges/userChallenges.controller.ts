import { Request, Response } from "express";
import UserChallengesService from "./userChallenges.service";

const UserChallengesController = {
  async getScoresByChallenge(req: Request, res: Response) {
    try {
      let challengeId = req.params.challengeId;
      let data = await UserChallengesService.getScoresByChallenge(challengeId);
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },

  async startChallenge(req: Request, res: Response) {
    try {
      let { challengeId, userId } = req.body;
      let data = await UserChallengesService.startChallenge({
        userId,
        challengeId,
      });
      res.status(201);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },

  async getUserChallenge(req: Request, res: Response) {
    try {
      let { challengeId, userId } = req.body;
      let data = await UserChallengesService.getUserChallengeByUserAndChallenge({
        userId,
        challengeId,
      });
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
  
  async endChallenge(req: Request, res: Response) {
    try {
      let { challengeId, userId } = req.body;
      let dateFinished = new Date().toString();
      let data = await UserChallengesService.endChallenge({
        userId,
        challengeId,
        dateFinished,
      });
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
};

export default UserChallengesController;
