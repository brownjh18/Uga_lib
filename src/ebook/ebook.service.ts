import { Injectable } from '@nestjs/common';
import { CreateEbookDto } from './dto/create-ebook.dto';
import { UpdateEbookDto } from './dto/update-ebook.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ebook } from './entities/ebook.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EbookService {
  constructor(
    @InjectRepository(Ebook) private readonly ebookRepository: Repository<Ebook>
  ) {}

  create(createEbookDto: CreateEbookDto) {
    const ebook = this.ebookRepository.create(createEbookDto);
    return this.ebookRepository.save(ebook);
  }

  findAll() {
    return this.ebookRepository.find()
  }

  findOne(id: number) {
    return this.ebookRepository.findOne({ where: { ebook_id: id } });
  }

  update(id: number, updateEbookDto: UpdateEbookDto) {
    return this.ebookRepository.update(id, updateEbookDto);
  }

  remove(id: number) {
    return this.ebookRepository.delete(id);
  }
}
