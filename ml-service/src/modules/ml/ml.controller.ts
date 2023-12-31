import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PredictClassDto, TrainDataDto } from 'src/dto/ml';
import { MlService } from './ml.service';

@Controller()
export class MlController {
  constructor(@Inject(MlService) private readonly mlService: MlService) {}

  @MessagePattern({ cmd: 'ping' })
  async ping() {
    return this.mlService.pingClients();
  }

  @MessagePattern({ cmd: 'schema' })
  async getSchema() {
    return this.mlService.getJsonSchema();
  }

  @MessagePattern({ cmd: 'predict' })
  async predict({ predictClass, features }: PredictClassDto) {
    return this.mlService.getPredict(features, predictClass);
  }
}
