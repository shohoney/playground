import { Module } from '@nestjs/common';
import { BarModule } from '../domain/bar/bar.module';
import { BarDataloader } from './bar.dataloader';

@Module({
  imports: [BarModule],
  providers: [BarDataloader],
  exports: [BarDataloader],
})
export class BarDataloaderModule {}
