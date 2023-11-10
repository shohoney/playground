import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { FooResolver } from './foo/foo.resolver';
import { BarResolver } from './bar/bar.resolver';
import { BazResolver } from './baz/baz.resolver';
import { DataloadersModule } from './dataloaders.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      useFactory: () => ({
        playground: true,
        autoSchemaFile: {
          federation: {
            version: 2,
            importUrl: 'https://specs.apollo.dev/federation/v2.3',
          },
        },
      }),
    }),
    DataloadersModule,
  ],
  providers: [FooResolver, BarResolver, BazResolver],
})
export class AppModule {}
