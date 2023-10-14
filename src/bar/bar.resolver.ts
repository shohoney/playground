import { ResolveField, Resolver } from '@nestjs/graphql';
import { BazProvider } from 'src/baz/baz.provider';
import { Bar } from './bar.model';

@Resolver((of) => Bar)
export class BarResolver {
  constructor(private readonly bazProvider: BazProvider) {}
  @ResolveField()
  async baz() {
    return await this.bazProvider.getBaz();
  }
}
