import { Global, Module } from '@nestjs/common';
import { CatsService } from './cats.service';

// 在其他模块中，不需要导入即可引用该模块的提供者
@Global()
@Module({
    providers: [CatsService],
    exports: [CatsService],
})
export class CatsModule {}
