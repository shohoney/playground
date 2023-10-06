import { ObjectType, Field } from '@nestjs/graphql';
import { Configuration } from '../configuration/configuration.model';

@ObjectType()
export class Company {
  @Field()
  name: string;

  @Field((type) => Configuration, { nullable: true })
  someProductConfig: Configuration;
}
