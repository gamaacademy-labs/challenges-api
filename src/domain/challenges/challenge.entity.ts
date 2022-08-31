import { ChallengeDeliverable } from "../challengeDeliverables/challengeDeliverable.entity";

export enum enum_challenge_difficult {
  easy = "easy",
  medium = "medium",
  hard = "hard"
}

export interface Challenge {
  id: string
  title: string
  description: string
  thumbnail: string
  level: enum_challenge_difficult
  instruction: string
  tags: string
  score: string
  answers: string
  finishAt: string
  deliverables?: ChallengeDeliverable[]
  createdAt?: string
  updatedAt?: string
}
