import { create } from 'zustand';

import { PredictionResult } from 'domain/ml';

type State = {
    predictionResult: PredictionResult[];
}

type Actions = {
    setPredictionResult: (result: PredictionResult) => void;
}

export const useMlStore = create<State & Actions>((set, state) => ({
  predictionResult: [],
  setPredictionResult: (predictionResult: PredictionResult) => {
    const resultList = state().predictionResult
      .filter(r => r.id !== predictionResult.id);

    set({ predictionResult: [...resultList, predictionResult] });

  },
}));
