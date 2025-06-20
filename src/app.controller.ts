import { Controller, Get, HttpCode, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("httpCode")
  @HttpCode(500)
  httpCode(): string {
    return 'This action returns all cats';
  }

  @Get("pathParam/:id")
  pathParam(@Param("id") id: string): string {
    return id;
  }
}
