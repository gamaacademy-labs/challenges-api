import express from "express";
import userChallengesController from "../domain/userChallenges/userChallenges.controller";

const usersChallengeRouter = express.Router();

usersChallengeRouter.get(
  "/ranking/:challengeId",
  userChallengesController.getScoresByChallenge
);

usersChallengeRouter.post(
  "/startchallenge",
  userChallengesController.startChallenge
);

export default usersChallengeRouter;