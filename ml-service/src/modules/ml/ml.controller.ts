import { MessagePattern } from '@nestjs/microservices';

export class MlController {
  @MessagePattern({ cmd: 'ping' })
  async ping() {
    return 'pong';
  }
}
