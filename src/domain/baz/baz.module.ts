import { Module } from '@nestjs/common';
import { BazProvider } from './baz.provider';

@Module({
  providers: [BazProvider],
  exports: [BazProvider],
})
export class BazModule {}
