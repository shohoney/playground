import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ResolversModule } from './resolvers.module';

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
    ResolversModule,
  ],
})
export class AppModule {}
