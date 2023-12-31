import { PipeTransform, Type } from '@nestjs/common';
import 'reflect-metadata';
import { BaseTypeOptions } from '../interfaces';
/**
 * Interface defining options that can be passed to `@Args()` decorator.
 */
export interface ArgsOptions extends BaseTypeOptions {
    /**
     * Name of the argument.
     */
    name?: string;
    /**
     * Description of the argument.
     */
    description?: string;
    /**
     * Function that returns a reference to the arguments host class.
     */
    type?: () => any;
}
/**
 * Resolver method parameter decorator. Extracts the arguments
 * object from the underlying platform and populates the decorated
 * parameter with the value of either all arguments or a single specified argument.
 */
export declare function Args(): ParameterDecorator;
/**
 * Resolver method parameter decorator. Extracts the arguments
 * object from the underlying platform and populates the decorated
 * parameter with the value of either all arguments or a single specified argument.
 */
export declare function Args(...pipes: (Type<PipeTransform> | PipeTransform)[]): ParameterDecorator;
/**
 * Resolver method parameter decorator. Extracts the arguments
 * object from the underlying platform and populates the decorated
 * parameter with the value of either all arguments or a single specified argument.
 */
export declare function Args(property: string, ...pipes: (Type<PipeTransform> | PipeTransform)[]): ParameterDecorator;
/**
 * Resolver method parameter decorator. Extracts the arguments
 * object from the underlying platform and populates the decorated
 * parameter with the value of either all arguments or a single specified argument.
 */
export declare function Args(options: ArgsOptions, ...pipes: (Type<PipeTransform> | PipeTransform)[]): ParameterDecorator;
/**
 * Resolver method parameter decorator. Extracts the arguments
 * object from the underlying platform and populates the decorated
 * parameter with the value of either all arguments or a single specified argument.
 */
export declare function Args(property: string, options: ArgsOptions, ...pipes: (Type<PipeTransform> | PipeTransform)[]): ParameterDecorator;
//# sourceMappingURL=args.decorator.d.ts.map