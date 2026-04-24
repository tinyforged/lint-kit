import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // Should allow any with warning or off depending on rule
  async unsafeMethod(data: any): Promise<any> {
    return data;
  }
}
