import {
  Context,
  Info,
  Parent,
  ResolveField,
  ResolveObjectType,
  Resolver,
} from '@nestjs/graphql';
import { Company } from './company.model';
import { CompanyService } from './company.service';

@Resolver((of) => Company)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @ResolveField()
  name() {
    return '';
  }

  @ResolveObjectType()
  async resolve(@Parent() p) {
    const company = await this.companyService.getCompany();
    return {
      name: company.company_name_looks_like_database,
    };
  }
}
