import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MlModule } from './modules/ml/ml.module';

@Module({
  imports: [MlModule],
  controllers: [AppController],
})
export class AppModule {}
