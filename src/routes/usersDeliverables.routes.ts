import express from "express";
import UserDeliverablesController from "../domain/userDeliverables/userDeliverables.controller";

const usersDeliverablesRouter = express.Router();

usersDeliverablesRouter.post(
  "/userdeliverable",
  UserDeliverablesController.includeUserDeliverable
);

export default usersDeliverablesRouter;
