import express from "express";
import MaterialsController from "../domain/materials/materials.controller";

const usersRouter = express.Router();

usersRouter.get("/materials/:challengeId", MaterialsController.getMaterialsByChallenge);

export default usersRouter;