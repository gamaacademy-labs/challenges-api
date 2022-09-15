import { Request, Response } from "express";
import UserChallengesService from "./userChallenges.service";
import { UserIdChallengeIdType } from "./userChallenges.types";

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

  async startChallenge(req: Request<any, any, any, UserIdChallengeIdType>, res: Response) {
    try {
      let { challengeId } = req.params;
      let { userId } = req.query;
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

  async getUserChallenge(req: Request<any, any, any, UserIdChallengeIdType>, res: Response) {
    try {
      let { challengeId } = req.params;
      let { userId } = req.query;
      let data = await UserChallengesService.getUserChallengeByUserAndChallenge({
        challengeId,
        userId
      });
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
  
  async endChallenge(req: Request<any, any, any, UserIdChallengeIdType>, res: Response) {
    try {
      let { challengeId } = req.params;
      let { userId } = req.query;
      let dateFinished = new Date().toString();
      let data = await UserChallengesService.endChallenge({
        challengeId,
        userId,
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
