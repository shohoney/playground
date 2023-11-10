import { Injectable } from '@nestjs/common';

@Injectable()
export class BarProvider {
  async getABar() {
    return {
      bar: Math.pow(Math.random() * Math.random() * 100, 3),
    }
  }
}