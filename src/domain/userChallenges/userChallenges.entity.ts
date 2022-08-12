import { Challenge } from "../challenges/challenge.entity";
import { User } from "../users/user.entity";

export interface UserChallenge {
  id: string;
  score: string;
  started_at?: string;
  finishe_at?: string;
  challengeId: string;
  challenge?: Challenge;
  userId: string;
  User?: User;
}
