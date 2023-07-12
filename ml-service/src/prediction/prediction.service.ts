import { Client } from 'pg';
import { TrainDataDto } from 'src/dto/ml';
const DecisionTree = require('decision-tree');

const { POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_DATABASE, POSTGRES_USER } =
  process.env;

const DB_URL = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DATABASE}`;

export class PredictionService {
  private lastSchema: any;
  private dataWarehouse: Client;
  private data: TrainDataDto[];
  private warehouseUrl = DB_URL;
  private trainedModel;

  constructor() {
    this.data = [];
  }

  async connectToDataWarehouse(url: string) {
    const client = new Client(url);
    await client.connect();

    this.dataWarehouse = client;
  }

  async getData(): Promise<TrainDataDto[]> {
    const res = await this.dataWarehouse.query('SELECT * FROM activity');
    this.data = res.rows;
    this.dataWarehouse.end();

    return this.data;
  }

  async divideData(
    data: TrainDataDto[],
  ): Promise<[TrainDataDto[], TrainDataDto[]]> {
    const trainData = [];
    const testData = [];

    const size = this.data.length;
    const trainDataLimit = Math.floor(size * 0.8);

    return new Promise((resolve) => {
      data.forEach((record, index) => {
        if (index < trainDataLimit) {
          return trainData.push(record);
        }

        return testData.push(record);
      });

      resolve([trainData, testData]);
    });
  }

  async processData(data: TrainDataDto[], features: string[]) {
    return data.map((record) => {
      const extractedFeatures = Object.keys(record).filter((f) =>
        features.includes(f),
      );

      const newRecord = {};

      extractedFeatures.forEach((property) => {
        const value = record[property];
        newRecord[property] = value;
      });

      return newRecord;
    });
  }

  async train(features: string[], classForPrediction: TrainDataDto) {
    await this.connectToDataWarehouse(this.warehouseUrl);
    const data = await this.getData();

    const [trainingData, testData] = await this.divideData(data);

    const processedTrainingData = await this.processData(
      trainingData,
      features,
    );

    const targetClassName = 'reachedGoal';

    return new Promise((resolve) => {
      const dt = new DecisionTree(targetClassName, features);

      dt.train(processedTrainingData);
      this.trainedModel = dt;
      resolve(true);
    });

    // const predictedClass = dt.predict({
    //   deepLevel: 2,
    //   textLength: 200,
    //   hasAttachments: true,
    // });

    // const accuracy = dt.evaluate(testData);

    // const treeJson = dt.toJSON();

    // this.lastSchema = treeJson;

    // return predictedClass;
  }

  async getJsonSchema() {
    return this.lastSchema;
  }
}
