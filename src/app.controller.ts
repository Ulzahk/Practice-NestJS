import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Good day';
  }
  @Get('new')
  newEndpoing() {
    return "I'm new";
  }
  @Get('/route/')
  hello() {
    return 'with NestJS';
  }
}
