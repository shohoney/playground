import { Injectable } from '@nestjs/common';

@Injectable()
export class FooProvider {
  async getAFoo() {
    return { 
      foo: 'Some arbitrary value from a database?', 
    };
  }
}
