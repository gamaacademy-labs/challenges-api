import express from "express";
import UserDeliverablesController from "../domain/userDeliverables/userDeliverable.controller"

const userDeliverablesRouter = express.Router();

userDeliverablesRouter.post( "/userdeliverable", UserDeliverablesController.includeUserDeliverable);
userDeliverablesRouter.get("/userdeliverable/:userDeliverableId", UserDeliverablesController.getDeliverableById);

export default userDeliverablesRouter