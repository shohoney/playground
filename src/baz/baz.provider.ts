import { Injectable } from '@nestjs/common';

@Injectable()
export class BazProvider {
  async getBaz() {
    const result = Math.round(Math.random() * 1) === 0 ? 'Win' : 'Lose';
    return {
      id: 'baz',
      baz: result,
    };
  }
}