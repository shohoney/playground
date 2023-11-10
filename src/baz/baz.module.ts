import { Module } from '@nestjs/common';
import { BazModule as BazBusiness } from '../domain/baz/baz.module';
import { BazDataloader } from './baz.dataloader';
@Module({
  imports: [BazBusiness],
  providers: [BazDataloader],
  exports: [BazDataloader],
})
export class BazModule {}
