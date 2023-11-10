import { DataloadersModule } from './dataloaders.module';
import { Module } from '@nestjs/common';
import { FooResolver } from './foo/foo.resolver';
import { BarResolver } from './bar/bar.resolver';
import { BazResolver } from './baz/baz.resolver';

@Module({
  imports: [DataloadersModule],
  providers: [FooResolver, BarResolver, BazResolver],
})
export class ResolversModule {}
