import { Inject } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { PredictResponseDto, TrainDataDto } from 'src/dto/ml';
import { PredictionService } from 'src/prediction/prediction.service';

@WebSocketGateway(+process.env.ML_PORT, { cors: true })
export class MlService
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  io: Server;

  constructor(
    @Inject(PredictionService)
    private readonly predictionService: PredictionService,
  ) {}

  async pingClients() {
    this.io.emit('ping', 'pong');
    return 'pong';
  }

  getJsonSchema() {
    return this.predictionService.getJsonSchema();
  }

  async getPredict(
    features: string[],
    predictSubject: TrainDataDto,
  ): Promise<PredictResponseDto> {
    this.io.emit('event', {
      result: await this.predictionService.train(features, predictSubject),
      id: predictSubject.id,
    });
    return { status: 'proccessing' };
  }

  afterInit(server: any) {
    console.log('websocket is ready');
  }

  handleConnection(client: any, ...args: any[]) {
    console.log('connection');
  }

  handleDisconnect(client: any) {
    console.log('disconnect');
  }
}
