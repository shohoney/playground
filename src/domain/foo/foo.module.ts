import { Module } from '@nestjs/common';
import { FooProvider } from './foo.provider';

@Module({
  providers: [FooProvider],
  exports: [FooProvider],
})
export class FooModule {}
