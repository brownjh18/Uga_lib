import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subscription } from './entities/subscription.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscription) private readonly subscriptionRepository: Repository<Subscription>
  ) {}

  create(createSubscriptionDto: CreateSubscriptionDto) {
    const subscription = this.subscriptionRepository.create(createSubscriptionDto);
    return this.subscriptionRepository.save(subscription);
  }

  findAll() {
    return this.subscriptionRepository.find();
  }

  findOne(id: number) {
    return this.subscriptionRepository.findOne({ where: { subscription_id: id } });
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return this.subscriptionRepository.update(id, updateSubscriptionDto);
  }

  remove(id: number) {
    return this.subscriptionRepository.delete(id);
  }
}
