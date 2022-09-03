import express from "express";
import UserDeliverablesController from "../domain/userDeliverables/userDeliverables.controller";

const userDeliverablesRouter = express.Router();

userDeliverablesRouter.post(
  "/userdeliverable",
  UserDeliverablesController.includeUserDeliverable
);

userDeliverablesRouter.put(
  "/userdeliverable/:userDeliverableId",
  UserDeliverablesController.updateUserDeliverable
);

userDeliverablesRouter.get(
  "/userdeliverable/:userDeliverableId",
  UserDeliverablesController.getDeliverableById
);

export default userDeliverablesRouter;
