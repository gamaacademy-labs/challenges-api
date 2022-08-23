import express from "express";
import ChallengeController from "../domain/challenges/challenges.controller";

const challengesRouter = express.Router();

challengesRouter.get("/challenges/:id", ChallengeController.getChallengeById);

challengesRouter.get("/challenges", ChallengeController.getAllChallenges);

export default challengesRouter;
