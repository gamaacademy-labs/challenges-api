import express from "express";
import UserDeliverableController from "../domain/userDeliverables/userDeliverable.controller"

const userDeliverableRoutes = express.Router();

userDeliverableRoutes.get("/userdeliverables/:id", UserDeliverableController.getDeliverableById);

export default userDeliverableRoutes