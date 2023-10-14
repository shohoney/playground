import { Module } from '@nestjs/common';
import { FooProvider } from './foo.provider';
import { FooResolver } from './foo.resolver';

@Module({
  providers: [FooResolver, FooProvider],
})
export class FooModule {}
