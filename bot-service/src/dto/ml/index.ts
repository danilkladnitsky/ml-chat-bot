export type PredictClassDto = {
  predictClass: {
    message_id: Id;
    deepLevel: number;
    hasAttachments: boolean;
    messageLength: number;
    buttonsNumber: number;
  };
  features: string[];
};
