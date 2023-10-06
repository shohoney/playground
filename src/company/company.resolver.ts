import { ResolveField, Resolver } from '@nestjs/graphql';
import { Company } from './company.model';
import { CompanyService } from './company.service';

@Resolver((of) => Company)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {
  }

  async resolve(rootArgs) {
    console.warn(rootArgs);
    const company = await this.companyService.getCompany();
    return {
      name: company.company_name_looks_like_database,
    };
  }
}
