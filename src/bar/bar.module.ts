import { Module } from '@nestjs/common';
import { BarProvider } from './bar.provider';
import { BarResolver } from './bar.resolver';

@Module({
  providers: [BarProvider, BarResolver],
  exports: [BarProvider],
})
export class BarModule {}
