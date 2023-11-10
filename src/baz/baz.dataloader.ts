import { Injectable } from '@nestjs/common';
import { BazProvider } from 'src/domain/baz/baz.provider';

@Injectable()
export class BazDataloader {
  constructor(private readonly bazProvider: BazProvider) {}
  load() {
    return this.bazProvider.getBaz();
  }
}
