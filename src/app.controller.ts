import { Body, Controller, Get, HttpCode, Inject, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './craete-cat.dto';
import { CatsService } from './cats/cats.service';
@Controller()
export class AppController {
  //constructor(private readonly appService: AppService, private readonly catsService: CatsService) { }
  constructor(private readonly appService: AppService) { }

  @Inject()
  private readonly catsService: CatsService


  @Get('/getHello4Cat')
  getHello4Cat(): string {
    return this.catsService.getHello();
  }

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

  @Get('/async')
  async async(): Promise<string> {
    return 'async func';
  }

  @Post('/createCat')
  async createCat(@Body() createCatDto: CreateCatDto) {
    return createCatDto;
  }

}
