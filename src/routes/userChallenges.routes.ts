import express from "express";
import UserChallengesController from "../domain/userChallenges/userChallenges.controller";

const userChallengesRouter = express.Router();

userChallengesRouter.get(
  "/challenge/:challengeId/ranking",
  UserChallengesController.getScoresByChallenge
);
userChallengesRouter.get(
  "/userchallenge/:challengeId",
  UserChallengesController.getUserChallenge
);
userChallengesRouter.post(
  "/userchallenge/:challengeId/start",
  UserChallengesController.startChallenge
);
userChallengesRouter.put(
  "/userchallenge/:challengeId/end",
  UserChallengesController.endChallenge
);

export default userChallengesRouter;
