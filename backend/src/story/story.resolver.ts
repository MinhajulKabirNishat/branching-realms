import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StoryService } from './story.service';
import { Story } from './story.entity';

@Resolver(() => Story)
export class StoryResolver {
  constructor(private storyService: StoryService) {}

  @Query(() => [Story])
  async getStories() {
    return this.storyService.findAll();
  }

  @Mutation(() => Story)
  async createStory(
    @Args('title') title: string,
    @Args('content') content: string,
    @Args('author') author: string,
  ) {
    return this.storyService.create({ title, content, author });
  }
}