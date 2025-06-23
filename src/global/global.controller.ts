import { Controller, Get, Inject } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';

@Controller('global')
export class GlobalController {

      @Inject()
      private readonly catsService: CatsService
    
    
      @Get('/getHello4Cat')
      getHello4Cat(): string {
        return this.catsService.getHello();
      }

}
