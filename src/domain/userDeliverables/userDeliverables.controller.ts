import { Request, Response } from "express";
import UserDeliverablesService from "./userDeliverables.service";

const UserDeliverablesController = {
  async includeUserDeliverable(req: Request, res: Response) {
    try {
      let { challengeId, userId, challengeDeliverableId, link, explanation } =
        req.body;
      let data = await UserDeliverablesService.includeUserDeliverable({
        userId,
        challengeId,
        challengeDeliverableId,
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
      let { link, explanation, challengeId, userId } = req.body;
      let data = await UserDeliverablesService.updateUserDeliverable({
        userDeliverableId,
        link,
        explanation,
        challengeId,
        userId,
      });
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
  async getDeliverableById(req: Request, res: Response) {
    try {
      let userDeliverableId = req.params.userDeliverableId;

      let data = await UserDeliverablesService.getDeliverableById(
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
};

export default UserDeliverablesController;
