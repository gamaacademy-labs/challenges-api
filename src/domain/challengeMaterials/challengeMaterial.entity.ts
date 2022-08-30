import { Challenge } from "../challenges/challenge.entity";

export enum enum_material_type { 
    file = "file", 
    link = "link"
}

export interface ChallengeMaterial {
    id: string
    title: string
    link: string
    type: enum_material_type
    challengeId: string
    challenge?: Challenge
    createdAt?: string
    updatedAt?: string
}