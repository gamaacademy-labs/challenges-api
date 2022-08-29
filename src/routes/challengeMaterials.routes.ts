import express from "express";
import ChallengeMaterialsController from "../domain/challengeMaterials/challengeMaterials.controller";

const challengeMaterialsRouter = express.Router();

challengeMaterialsRouter.get("/materials/:challengeId", ChallengeMaterialsController.getMaterialsByChallenge);

export default challengeMaterialsRouter;