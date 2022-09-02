export interface createUserDeliverable_type {
  challengeId: string;
  userId: string;
  challengeDeliverableId: string;
  link: string;
  explanation: string;
}

export interface updateUserDeliverableId_type {
  userDeliverableId: string;
  link: string;
  explanation: string;
  challengeId: string;
  userId: string;
}
