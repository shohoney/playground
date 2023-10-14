import { Resolver, ResolveReference } from '@nestjs/graphql';
import { Baz } from './baz.model';
import { BazProvider } from './baz.provider';

@Resolver((of) => Baz)
export class BazResolver {
  constructor(private readonly bazProvider: BazProvider) {}
  @ResolveReference()
  async resolveReference(_ref: { __typename: string; id: string }) {
    return this.bazProvider.getBaz();
  }
}
