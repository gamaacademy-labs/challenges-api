
import { Request , Response} from "express";
import UserDeliverablesService from "./userDeliverables.service"

const UserDeliverableController = {
  async includeUserDeliverable(req: Request, res: Response) {
    try {
      let { challengeId, userId, challengeDeliverableId, link, explanation } = req.body;
      let data = await UserDeliverablesService.includeUserDeliverable({
        userId,
        challengeId,
        challengeDeliverableId,
        link,
        explanation
      });
      res.status(201);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },

    async getDeliverableById(req: Request, res: Response) {
      try {
        let id = req.params.id;
  
        let data = await UserDeliverablesService.getDeliverableById(id);
  
        res.status(200);
        res.json(data);
      } catch (err: any) {
      res.status(400);
        res.json({
          message: err.message,
        });
        
      }
    },
 }
    


export default UserDeliverableController