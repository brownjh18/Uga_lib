import { Injectable } from '@nestjs/common';
import { CreateUserBookDto } from './dto/create-user-book.dto';
import { UpdateUserBookDto } from './dto/update-user-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBook } from './entities/user-book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserBookService {
  constructor(
    @InjectRepository(UserBook) private readonly userRepositroy: Repository<UserBook>
  ) {}

  create(createUserBookDto: CreateUserBookDto) {
    const userBook = this.userRepositroy.create(createUserBookDto);
    return this.userRepositroy.save(userBook);
  }

  findAll() {
    return this.userRepositroy.find();
  }

  findOne(id: number) {
    return this.userRepositroy.findOne({ where: { userBook_id: id}});
  }

  update(id: number, updateUserBookDto: UpdateUserBookDto) {
    return this.userRepositroy.update(id, updateUserBookDto);
  }

  remove(id: number) {
    return this.userRepositroy.delete(id);
  }
}
