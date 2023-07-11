import { Inject } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { PredictionService } from 'src/prediction/prediction.service';

@WebSocketGateway(+process.env.ML_PORT)
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

  async getPredict() {
    this.io.emit('predict', this.predictionService.train());
    return 'processing...';
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
