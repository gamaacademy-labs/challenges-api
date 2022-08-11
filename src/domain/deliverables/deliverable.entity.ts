// import { Challenges } from "../challenges/challenges.entity.ts";

export interface Deliverable {
  id: string;
  title: string;
  description: string;
  averageTime: number;
  challengeId: string;
  // challenge?: Challenges;
  createdAt?: string;
  updatedAt?: string;
}
