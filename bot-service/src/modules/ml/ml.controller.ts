import { Controller, Get, Inject } from '@nestjs/common';
import { MlService } from './ml.service';

@Controller('ml')
export class MlController {
  constructor(@Inject(MlService) private readonly mlService: MlService) {}

  @Get('ping')
  async ping() {
    return this.mlService.ping();
  }
}
