import { Deliverable } from "../deliverables/deliverable.entity";

export enum enum_challenge_difficult {
  easy = "easy",
  medium = "medium",
  hard = "hard"
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  level: enum_challenge_difficult;
  instruction: string;
  tags: string;
  score: string;
  deliverables?: Deliverable[];
  createdAt?: string;
  updatedAt?: string;
}
