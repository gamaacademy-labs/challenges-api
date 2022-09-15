export interface CreateUserDeliverableType {
  userId: string
  challengeDeliverableId: string
  link: string
  explanation: string
}

export interface UpdateUserDeliverableIdType {
  userDeliverableId: string
  link: string
  explanation: string
}

export interface UserDeliverableExistsType {
  challengeDeliverableId: string
  userChallengeId: string

}