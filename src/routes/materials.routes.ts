import express from "express";
import MaterialsController from "../domain/materials/materials.controller";

const materialsRouter = express.Router();

materialsRouter.get("/materials/:challengeId", MaterialsController.getMaterialsByChallenge);

export default materialsRouter;