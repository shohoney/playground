import { Module } from '@nestjs/common';
import { FooModule as FooBusiness } from '../domain/foo/foo.module';
import { FooDataloader } from './foo.dataloader';
@Module({
  imports: [FooBusiness],
  providers: [FooDataloader],
  exports: [FooDataloader],
})
export class FooModule {}
