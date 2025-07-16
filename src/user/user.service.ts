import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepositry: Repository<User>
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = this.userRepositry.create(createUserDto);
    return this.userRepositry.save(user);
  }

  findAll() {
    return this.userRepositry.find();
  }

  findOne(id: number) {
    return this.userRepositry.findOne({ where: { user_id: id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepositry.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepositry.delete(id);
  }
}
