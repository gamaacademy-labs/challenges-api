export enum enum_challenge_difficult{
    easy = "easy",
    medium = "medium",
    hard = "hard"
}

export interface Challenge {
    id: string
    tittle: string
    description: string
    thumbnail: string
    level: enum_challenge_difficult
    instruction: string
    tags: string
    score: string
    createdAt?: string
    updatedAt?: string
}