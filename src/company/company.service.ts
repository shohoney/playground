import { Injectable } from '@nestjs/common';
const companyNames = ['MegaCorp', 'Tesla', 'Lattice'];
@Injectable()
export class CompanyService {
  async getCompany() {
    return {
      company_name_looks_like_database:
        companyNames[Math.floor(Math.random() * 3)],
    };
  }
}
