import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { MlController } from './ml.controller';
import { MlService } from './ml.service';

@Module({
  controllers: [MlController],
  providers: [MlService],
  imports: [
    ClientsModule.register([
      { name: 'ML_SERVICE', transport: Transport.TCP, options: { host: 'ml' } },
    ]),
  ],
})
export class MlModule {}
