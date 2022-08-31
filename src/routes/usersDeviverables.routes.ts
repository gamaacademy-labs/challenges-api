import express from "express";
import UserDeliverablesController from "../domain/userDeliverables/userDeliverables.controller";

const usersDeviverablesRouter = express.Router();

usersDeviverablesRouter.post(
  "/userdeliverable",
  UserDeliverablesController.includeUserDeliverable
);

export default usersDeviverablesRouter;
