import { ResolveField, ResolveObjectType, Resolver } from '@nestjs/graphql';
import { BazDataloader } from 'src/baz/baz.dataloader';
import { FooDataloader } from 'src/foo/foo.dataloader';
import { BarDataloader } from './bar.dataloader';
import { Bar } from './bar.model';

@Resolver((of) => Bar)
export class BarResolver {
  constructor(
    private readonly bazLoader: BazDataloader,
    private readonly fooLoader: FooDataloader,
    private readonly barLoader: BarDataloader,
  ) {}

  @ResolveField()
  baz() {
    return this.bazLoader.load();
  }
}
