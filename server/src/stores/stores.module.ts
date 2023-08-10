import { Module } from '@nestjs/common';
import { StoresController } from './stores.controller';
import { StoresService } from './stores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stores } from 'src/entity/stores.entity';
import { Users } from 'src/entity/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stores, Users])],
  controllers: [StoresController],
  providers: [StoresService]
})
export class StoresModule {}
