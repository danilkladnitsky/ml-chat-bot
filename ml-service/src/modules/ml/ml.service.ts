import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(+process.env.ML_PORT)
export class MlService
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  io: Server;

  async pingClients() {
    this.io.emit('ping', 'pong');
    return 'pong';
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
