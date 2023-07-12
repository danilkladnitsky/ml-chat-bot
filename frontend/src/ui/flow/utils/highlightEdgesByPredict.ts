import { FlowEdge } from 'domain/flow';
import { MlResultColor, PredictionResult } from 'domain/ml';

export const highlightEdgesByPredict = (
  edges: FlowEdge[],
  prediction: PredictionResult[],
): FlowEdge[] => {

  return edges.map(edge => {
    const sourceId = edge.target;
    const predictResult = prediction.find(p => p.id.toString() === sourceId);

    if (!predictResult) {
      return edge;
    }

    const predictIsOptimistic = predictResult.result;

    return ({
      ...edge,
      style: {
        stroke: predictIsOptimistic
          ? MlResultColor.GOOD
          : MlResultColor.BAD,
      },
    });
  });

};
