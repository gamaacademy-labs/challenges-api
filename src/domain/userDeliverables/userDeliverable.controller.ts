
import { Request , Response} from "express";
import UserDeliverableService from "./userDeliverable.service"

const UserDeliverableController = {
    async getDeliverableById(req: Request, res: Response) {
      try {
        let id = req.params.id;
  
        let data = await UserDeliverableService.getDeliverableById(id);
  
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