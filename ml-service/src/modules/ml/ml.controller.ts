import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MlService } from './ml.service';

@Controller()
export class MlController {
  constructor(@Inject(MlService) private readonly mlService: MlService) {}
  @MessagePattern({ cmd: 'ping' })
  async ping() {
    return this.mlService.pingClients();
  }
}
