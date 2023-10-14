import { Resolver, Query, Context } from '@nestjs/graphql';
import { Viewer } from './viewer.model';

@Resolver((of) => Viewer)
export class ViewerResolver {
  @Query((returns) => Viewer, { name: 'viewer' })
  async getViewer(@Context() ctx) {
    return {
      fullName: 'Firstname Lastname',
    };
  }
}
