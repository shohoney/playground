import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ViewerModule } from './viewer/viewer.module';
import { CompanyModule } from './company/company.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { FooModule } from './foo/foo.module';

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
    ViewerModule,
    CompanyModule,
    ConfigurationModule,
    FooModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

