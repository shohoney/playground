import { Injectable } from '@nestjs/common';
import { BarProvider } from 'src/domain/bar/bar.provider';

@Injectable()
export class BarDataloader {
  constructor(private readonly barProvider: BarProvider) {}

  async load() {
    return this.barProvider.getABar();
  }
}
