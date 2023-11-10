import { Injectable } from '@nestjs/common';
import { FooProvider } from 'src/domain/foo/foo.provider';

@Injectable()
export class FooDataloader {
  constructor(private readonly fooProvider: FooProvider) {}

  load() {
    return this.fooProvider.getAFoo();
  }
}
