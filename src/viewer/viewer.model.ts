import { ObjectType, Field } from '@nestjs/graphql';
import { Company } from '../company/company.model';

@ObjectType()
export class Viewer {
  @Field()
  fullName: string;

  @Field((type) => Company)
  company: Company;
}
