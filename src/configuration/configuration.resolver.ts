import { Configuration } from './configuration.model';
import { Resolver, ResolveField } from '@nestjs/graphql';

@Resolver((of) => Configuration)
export class ConfigurationResolver {
  @ResolveField()
  name(rootArgs) {
    console.warn(rootArgs);

    return 'wonky';
  }
  resolve(rootArgs) {
    if (rootArgs.name === 'Tesla') return null;
    return {
      name: `${rootArgs.name} has this option turned on`,
    };
  }
}
