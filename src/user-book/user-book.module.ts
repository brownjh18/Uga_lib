import { Module } from '@nestjs/common';
import { UserBookService } from './user-book.service';
import { UserBookController } from './user-book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBook } from './entities/user-book.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserBook])
  ],
  controllers: [UserBookController],
  providers: [UserBookService],
})
export class UserBookModule {}
