import express from "express";
import UserDeliverablesController from "../domain/userDeliverables/userDeliverables.controller";

const usersDeliverablesRouter = express.Router();

usersDeliverablesRouter.post(
  "/userdeliverable",
  UserDeliverablesController.includeUserDeliverable
);

usersDeliverablesRouter.put(
  "/userdeliverable/:userDeliverableId",
  UserDeliverablesController.updateUserDeliverable
);

usersDeliverablesRouter.get(
  "/userdeliverable/:userDeliverableId",
  UserDeliverablesController.getDeliverableById
);

export default usersDeliverablesRouter;
