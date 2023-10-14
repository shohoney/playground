import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import { BarProvider } from 'src/bar/bar.provider';
import { Foo } from './foo.model';
import { FooProvider } from './foo.provider';

@Resolver((of) => Foo)
export class FooResolver {
  constructor(
    private readonly fooProvider: FooProvider,
    private readonly barProvider: BarProvider, // I think this is less than ideal.
  ) {}

  @Query((returns) => Foo)
  async foo() {
    return await this.fooProvider.getAFoo();
  }

  @ResolveField()
  async bar() {
    return await this.barProvider.getABar();
  }
}
