import { UserChallenge } from "../userChallenges/userChallenge.entity";

export interface UserDeliverable {
    id?: string
    link: string
    explanation: string
    userChallengeId: string
    userChallenges?: UserChallenge
    challengeDeliverableId: string
    createdAt?: string
    updatedAt?: string
}