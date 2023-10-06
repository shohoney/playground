import { Module } from '@nestjs/common';
import { ConfigurationResolver } from "./configuration.resolver";

@Module({
  providers: [
    ConfigurationResolver
  ]
})
export class ConfigurationModule {}
