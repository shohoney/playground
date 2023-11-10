import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import { BazDataloader } from 'src/baz/baz.dataloader';
import { FooDataloader } from './foo.dataloader';
import { Foo } from './foo.model';

@Resolver((of) => Foo)
export class FooResolver {
  constructor(
    private readonly fooLoader: FooDataloader,
    private readonly bazLoader: BazDataloader,
  ) {}

  @Query((returns) => Foo)
  async foo() {
    return await this.fooLoader.load();
  }

  @ResolveField()
  baz() {
    return this.bazLoader.load();
  }
}
