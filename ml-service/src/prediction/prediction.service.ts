const DecisionTree = require('decision-tree');

export class PredictionService {
  async train() {
    const trainingData = [
      {
        deepLevel: 2,
        textLength: 200,
        hasAttachments: true,
        reachedGoal: true,
      },
      {
        deepLevel: 3,
        textLength: 700,
        hasAttachments: false,
        reachedGoal: false,
      },
      {
        deepLevel: 3,
        textLength: 700,
        hasAttachments: true,
        reachedGoal: true,
      },
      {
        deepLevel: 5,
        textLength: 100,
        hasAttachments: false,
        reachedGoal: false,
      },
    ];

    const features = ['deepLevel', 'textLength', 'hasAttachments'];
    const targetClassName = 'reachedGoal';

    const dt = new DecisionTree(targetClassName, features);

    dt.train(trainingData);

    const predictedClass = dt.predict({
      deepLevel: 2,
      textLength: 200,
      hasAttachments: true,
    });

    const testData = [
      {
        deepLevel: 2,
        textLength: 200,
        hasAttachments: true,
        reachedGoal: true,
      },
      {
        deepLevel: 3,
        textLength: 700,
        hasAttachments: false,
        reachedGoal: false,
      },
    ];

    const accuracy = dt.evaluate(testData);

    const treeJson = dt.toJSON();

    console.log(treeJson);
  }
}
