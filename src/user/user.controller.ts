import { Controller, Get, Inject } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {


    @Inject()
    private readonly userService: UserService;


    @Get('findAll')
    public async findAll(): Promise<any> {
        return this.userService.findAll();
    }

}
