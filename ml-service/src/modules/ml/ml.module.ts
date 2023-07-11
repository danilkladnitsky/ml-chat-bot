import { Module } from '@nestjs/common';
import { PredictionModule } from 'src/prediction/prediction.module';
import { MlController } from './ml.controller';
import { MlService } from './ml.service';

@Module({
  controllers: [MlController],
  providers: [MlService],
  imports: [PredictionModule],
})
export class MlModule {}
