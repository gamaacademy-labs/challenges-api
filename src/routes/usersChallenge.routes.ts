import express from "express";
import userChallengesController from "../domain/userChallenges/userChallenges.controller";

const usersChallengeRouter = express.Router();

usersChallengeRouter.get(
  "/ranking/:challengeId",
  userChallengesController.getScoresByChallenge
);
usersChallengeRouter.get(
  "/userchallenge",
  userChallengesController.getUserChallenge
);
usersChallengeRouter.post(
  "/startchallenge",
  userChallengesController.startChallenge
);
usersChallengeRouter.put(
  "/endchallenge",
  userChallengesController.endChallenge
);

export default usersChallengeRouter;
