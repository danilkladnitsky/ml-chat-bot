export type PredictResponseDto = {
  status: string;
};

export type TrainDataDto = {
  hasAttachments: boolean;
  textLength: number;
  deepLevel: number;
  buttonsNumber: number;
};
