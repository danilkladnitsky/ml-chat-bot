export type CreateActivityDto = {
  message_id: Id;
  deepLevel: number;
  hasAttachments: boolean;
  messageLength: number;
  buttonsNumber: number;
};
