import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Story } from './story.entity';

@Injectable()
export class StoryService {
  constructor(
    @InjectRepository(Story)
    private storyRepo: Repository<Story>,
  ) {}

  async findAll(): Promise<Story[]> {
    return this.storyRepo.find();
  }

  async create(data: Partial<Story>): Promise<Story> {
    const story = this.storyRepo.create(data);
    return this.storyRepo.save(story);
  }
}