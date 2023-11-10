import { Field, ObjectType } from '@nestjs/graphql';
import { Bar } from 'src/bar/bar.model';
import { Baz } from 'src/baz/baz.model';

@ObjectType()
export class Foo {
  @Field()
  foo: string;

  @Field((type) => Bar)
  bar: Bar;

  @Field(type => Baz)
  baz: Baz;
}
