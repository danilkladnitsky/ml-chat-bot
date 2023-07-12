import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { MlService } from './ml.service';

@Controller('ml')
export class MlController {
  constructor(@Inject(MlService) private readonly mlService: MlService) {}

  @Get('ping')
  async ping() {
    return this.mlService.ping();
  }

  @Post('predict/:id')
  async predictData(@Param('id') id: Id, @Body('features') features: string[]) {
    return this.mlService.predict(id, features);
  }
}
