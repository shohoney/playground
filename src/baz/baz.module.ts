import { Module } from '@nestjs/common';
import { BazProvider } from './baz.provider';
import { BazResolver } from './baz.resolver';

@Module({
  providers: [BazResolver, BazProvider],
  exports: [BazProvider],
})
export class BazModule {}
