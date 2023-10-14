import { Module } from '@nestjs/common';
import { BarModule } from 'src/bar/bar.module';
import { BarProvider } from 'src/bar/bar.provider';
import { FooProvider } from './foo.provider';
import { FooResolver } from './foo.resolver';

@Module({
  imports: [BarModule],
  providers: [FooResolver, FooProvider, BarProvider],
})
export class FooModule {}
