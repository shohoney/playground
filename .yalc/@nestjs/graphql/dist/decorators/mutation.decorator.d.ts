import 'reflect-metadata';
import { Complexity } from '../interfaces';
import { BaseTypeOptions } from '../interfaces/base-type-options.interface';
import { ReturnTypeFunc } from '../interfaces/return-type-func.interface';
/**
 * Interface defining options that can be passed to `@Mutation()` decorator.
 */
export interface MutationOptions extends BaseTypeOptions {
    /**
     * Name of the mutation.
     */
    name?: string;
    /**
     * Description of the mutation.
     */
    description?: string;
    /**
     * Mutation deprecation reason (if deprecated).
     */
    deprecationReason?: string;
    /**
     * Mutation complexity options.
     */
    complexity?: Complexity;
}
/**
 * Mutation handler (method) Decorator. Routes specified mutation to this method.
 */
export declare function Mutation(): MethodDecorator;
/**
 * Mutation handler (method) Decorator. Routes specified mutation to this method.
 */
export declare function Mutation(name: string): MethodDecorator;
/**
 * Mutation handler (method) Decorator. Routes specified mutation to this method.
 */
export declare function Mutation(typeFunc: ReturnTypeFunc, options?: MutationOptions): MethodDecorator;
//# sourceMappingURL=mutation.decorator.d.ts.map