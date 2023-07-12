import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { PredictClassDto } from 'dto/ml';
import { MlService } from './ml.service';

@Controller('ml')
export class MlController {
  constructor(@Inject(MlService) private readonly mlService: MlService) {}

  @Get('ping')
  async ping() {
    return this.mlService.ping();
  }

  @Post('predict')
  async predictData(@Body() predictDto: PredictClassDto) {
    return this.mlService.predict(predictDto);
  }
}
