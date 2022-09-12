import { Request, Response } from "express";
import UserDeliverablesService from "./userDeliverables.service";
import { CreateUserDeliverableType } from "./userDeliverables.types";

const UserDeliverablesController = {
  async includeUserDeliverable(req: Request<any, any, any, CreateUserDeliverableType>, res: Response) {
    try {
      let { challengeDeliverableId } = req.params;
      let { userId } = req.query;
      let { link, explanation } = req.body;
      let data = await UserDeliverablesService.includeUserDeliverable({
        challengeDeliverableId,
        userId,
        link,
        explanation,
      });
      res.status(201);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },

  async updateUserDeliverable(req: Request, res: Response) {
    try {
      let { userDeliverableId } = req.params;
      let { link, explanation } = req.body;
      let data = await UserDeliverablesService.updateUserDeliverable({
        userDeliverableId,
        link,
        explanation
      });
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },

  async getUserDeliverableById(req: Request, res: Response) {
    try {
      let userDeliverableId = req.params.userDeliverableId;

      let data = await UserDeliverablesService.getUserDeliverableById(
        userDeliverableId
      );

      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({
        message: err.message,
      });
    }
  },

  async getUserDeliverablesByUserChallengeId(req: Request, res: Response) {
    try {
      let { userChallengeId } = req.params;

      let data = await UserDeliverablesService.getUserDeliverablesByUserChallengeId(userChallengeId);

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

export default UserDeliverablesController;
