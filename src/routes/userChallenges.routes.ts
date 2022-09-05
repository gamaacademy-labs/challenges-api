import express from "express";
import UserChallengesController from "../domain/userChallenges/userChallenges.controller";

const userChallengesRouter = express.Router();

userChallengesRouter.get(
  "/ranking/:challengeId",
  UserChallengesController.getScoresByChallenge
);
userChallengesRouter.get(
  "/userchallenge",
  UserChallengesController.getUserChallenge
);
userChallengesRouter.post(
  "/startchallenge",
  UserChallengesController.startChallenge
);
userChallengesRouter.put(
  "/endchallenge",
  UserChallengesController.endChallenge
);

export default userChallengesRouter;
