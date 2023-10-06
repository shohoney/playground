import { Resolver, Query } from '@nestjs/graphql';
import { Viewer } from './viewer.model';

@Resolver((of) => Viewer)
export class ViewerResolver {
  @Query((returns) => Viewer, { name: 'viewer'})
  async getViewer() {
    console.warn('im here');
    return {
      fullName: 'Firstname Lastname',
    };
  }
}
