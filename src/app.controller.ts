import { Controller, Get } from '@nestjs/common';
import { ServiceStatusResponse } from './app-interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('status')
  getStatus(): Promise<ServiceStatusResponse[]> {
    return this.appService.getStatus();
  }
}
