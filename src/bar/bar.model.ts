import { Field, ObjectType } from '@nestjs/graphql';
import { Baz } from 'src/baz/baz.model';

@ObjectType()
export class Bar {
  @Field()
  bar: number;

  @Field((type) => Baz, { nullable: true })
  baz: Baz | null;
}
