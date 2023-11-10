import { ResolveObjectType, Resolver, ResolveReference } from '@nestjs/graphql';
import { Baz } from './baz.model';

@Resolver((of) => Baz)
export class BazResolver {
}
