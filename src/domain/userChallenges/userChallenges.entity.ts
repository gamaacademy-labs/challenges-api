import { Challenge } from "../challenges/challenge.entity";
import { User } from "../users/user.entity";

export interface UserChallenge {
  id?: string;
  score?: string;
  startedAt?: string;
  finishedAt?: string;
  challengeId: string;
  userId: string;
  user?: User;
}
