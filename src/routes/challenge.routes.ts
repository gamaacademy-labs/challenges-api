import express from "express";
import ChallengeController from "../domain/challenges/challenges.controller";

const challengesRouter = express.Router();

challengesRouter.get("/challenges/:tittle", ChallengeController.getChallengeByName)

export default challengesRouter;