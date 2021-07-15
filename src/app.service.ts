import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'New string';
  }
  getTest(): string {
    return 'This is a test';
  }
}
