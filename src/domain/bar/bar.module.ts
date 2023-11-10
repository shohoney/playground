import { Module } from '@nestjs/common';
import { BarProvider } from './bar.provider';

@Module({
  providers: [BarProvider],
  exports: [BarProvider],
})
export class BarModule {}
