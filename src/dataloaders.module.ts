import { Module } from '@nestjs/common';
import { BarDataloaderModule } from './bar/bar.dataloader.module';
import { FooModule } from './foo/foo.module';
import { BazModule } from './baz/baz.module';
@Module({
  imports: [FooModule, BarDataloaderModule, BazModule],
  exports: [FooModule, BarDataloaderModule, BazModule],
})
export class DataloadersModule {}
