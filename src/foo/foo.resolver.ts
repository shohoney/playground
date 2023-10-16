import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Foo } from './foo.model';
import { FooProvider } from './foo.provider';

@Resolver((of) => Foo)
export class FooResolver {
  constructor(private readonly fooProvider: FooProvider) {}

  @Query((returns) => Foo)
  async foo() {
    return await this.fooProvider.getAFoo();
  }

  @ResolveField()
  baz() {
    return {
      baz: 'im doing different things',
      id: 'special',
    }
  }
}
