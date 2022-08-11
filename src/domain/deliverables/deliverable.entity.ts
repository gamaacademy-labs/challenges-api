import { Challenge } from "../challenges/challenge.entity";

export interface Deliverable {
  id: string;
  title: string;
  description: string;
  averageTime: number;
  challengeId: string;
  createdAt?: string;
  updatedAt?: string;
}
