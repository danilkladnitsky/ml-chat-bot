import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PredictClassDto } from 'dto/ml';

export class MlService {
  constructor(@Inject('ML_SERVICE') private client: ClientProxy) {}

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  async ping() {
    const pattern = { cmd: 'ping' };
    return this.client.send(pattern, {});
  }

  async predict(dto: PredictClassDto) {
    const pattern = { cmd: 'predict' };
    return this.client.send(pattern, {
      features: dto.features,
      predictClass: dto.predictClass,
    });
  }
}
