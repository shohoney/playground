import { Configuration } from './configuration.model';
import { Resolver, ResolveField, ResolveObjectType } from '@nestjs/graphql';

@Resolver((of) => Configuration)
export class ConfigurationResolver {
  @ResolveField()
  name(rootArgs) {
    console.warn(rootArgs);

    return 'wonky';
  }
  @ResolveObjectType()
  resolve(rootArgs) {
    if (rootArgs.name === 'Tesla') return null;
    return {
      name: `${rootArgs.name} has this option turned on`,
    };
  }
}
