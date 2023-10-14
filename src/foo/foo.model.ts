import { Field, ObjectType } from '@nestjs/graphql';
import { Bar } from 'src/bar/bar.model';

@ObjectType()
export class Foo {
  @Field()
  foo: string;

  @Field((type) => Bar)
  bar: Bar;
}
