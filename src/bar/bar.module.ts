import { Module } from '@nestjs/common';
import { BazModule } from 'src/baz/baz.module';
import { BarProvider } from './bar.provider';
import { BarResolver } from './bar.resolver';

@Module({
  imports: [BazModule],
  providers: [BarProvider, BarResolver],
  exports: [BarProvider],
})
export class BarModule {}
