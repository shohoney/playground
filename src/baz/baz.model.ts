import { Directive, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Baz {
  @Field()
  id: string;

  @Field()
  baz: string;
}
