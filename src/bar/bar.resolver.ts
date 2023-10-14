import { ResolveObjectType, Resolver } from '@nestjs/graphql';
import { Bar } from './bar.model';
import { BarProvider } from './bar.provider';

@Resolver((of) => Bar)
export class BarResolver {
  constructor(private readonly barProvider: BarProvider) {}

  @ResolveObjectType()
  async resolveEntity() {
    return this.barProvider.getABar();
  }
}
