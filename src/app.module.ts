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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/**
 * useFactory: async (configService: ConfigService) => ({
 *         fieldResolverEnhancers: ['guards'],
 *         buildSchemaOptions: {
 *           orphanedTypes: [
 *             CompensationBand,
 *             FederationTest,
 *             User,
 *             CompensationCycleParticipant,
 *           ],
 *         },
 *         autoSchemaFile: {
 *           federation: {
 *             version: 2,
 *             importUrl: 'https://specs.apollo.dev/federation/v2.3',
 *           },
 *         },
 *         persistedQueries: false,
 *         cache: 'bounded',
 *         transformSchema: (schema: GraphQLSchema) => {
 *           if (configService.get<string>('NODE_ENV') === 'development') {
 *             fs.writeFileSync(
 *               '../../packages/hoodwink-api/schemas/__generated__/hoodwink-subgraph.graphql',
 *               printSubgraphSchema(schema),
 *             );
 *           }
 *           return schema;
 *         },
 *         transformAutoSchemaFile: true,
 *       }),
 */
