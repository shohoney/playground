import { Complexity, FieldMiddleware } from '../interfaces';
import { BaseTypeOptions } from '../interfaces/base-type-options.interface';
import { ReturnTypeFunc } from '../interfaces/return-type-func.interface';
/**
 * Interface defining options that can be passed to `@ResolveField()` decorator.
 */
export interface ResolveFieldOptions extends BaseTypeOptions {
    /**
     * Name of the field.
     */
    name?: string;
    /**
     * Description of the field.
     */
    description?: string;
    /**
     * Field deprecation reason (if deprecated).
     */
    deprecationReason?: string;
    /**
     * Field complexity options.
     */
    complexity?: Complexity;
    /**
     * Array of middleware to apply.
     */
    middleware?: FieldMiddleware[];
}
/**
 * Field resolver (method) Decorator.
 */
export declare function ResolveField(typeFunc?: ReturnTypeFunc, options?: ResolveFieldOptions): MethodDecorator;
/**
 * Property resolver (method) Decorator.
 */
export declare function ResolveField(propertyName?: string, typeFunc?: ReturnTypeFunc, options?: ResolveFieldOptions): MethodDecorator;
//# sourceMappingURL=resolve-field.decorator.d.ts.map