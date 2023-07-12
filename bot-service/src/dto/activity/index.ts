export type CreateActivityDto = {
  message_id: Id;
  deepLevel: number;
  hasAttachments: boolean;
  buttonsNumber: number;
  messageLength: number;
};
