import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { TelegramModule } from 'modules/telegram/telegram.module';
import { DatabaseModule } from 'database/database.module';
import { MlModule } from 'modules/ml/ml.module';

@Module({
  imports: [DatabaseModule, TelegramModule, MlModule],
  controllers: [AppController],
})
export class AppModule {}
