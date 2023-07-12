export type PredictResponseDto = {
  status: string;
};

export type TrainDataDto = {
  hasAttachments: boolean;
  textLength: number;
  deepLevel: number;
  buttonsNumber: number;
  id: number;
};

export type PredictClassDto = {
  predictClass: TrainDataDto;
  features: string[];
};

export type PredictResultDto = {
  result: boolean;
  entityId: number;
};
