"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OmitType = void 0;
const shared_utils_1 = require("@nestjs/common/utils/shared.utils");
const mapped_types_1 = require("@nestjs/mapped-types");
const decorators_1 = require("../decorators");
const metadata_loader_1 = require("../plugin/metadata-loader");
const get_fields_and_decorator_util_1 = require("../schema-builder/utils/get-fields-and-decorator.util");
const type_helpers_utils_1 = require("./type-helpers.utils");
function OmitType(classRef, keys, decorator) {
    const { fields, decoratorFactory } = (0, get_fields_and_decorator_util_1.getFieldsAndDecoratorForType)(classRef);
    const isInheritedPredicate = (propertyKey) => !keys.includes(propertyKey);
    class OmitObjectType {
        constructor() {
            (0, mapped_types_1.inheritPropertyInitializers)(this, classRef, isInheritedPredicate);
        }
    }
    if (decorator) {
        decorator({ isAbstract: true })(OmitObjectType);
    }
    else {
        decoratorFactory({ isAbstract: true })(OmitObjectType);
    }
    (0, mapped_types_1.inheritValidationMetadata)(classRef, OmitObjectType, isInheritedPredicate);
    (0, mapped_types_1.inheritTransformationMetadata)(classRef, OmitObjectType, isInheritedPredicate);
    function applyFields(fields) {
        fields
            .filter((item) => !keys.includes(item.name))
            .forEach((item) => {
            if ((0, shared_utils_1.isFunction)(item.typeFn)) {
                // Execute type function eagerly to update the type options object (before "clone" operation)
                // when the passed function (e.g., @Field(() => Type)) lazily returns an array.
                item.typeFn();
            }
            (0, decorators_1.Field)(item.typeFn, { ...item.options })(OmitObjectType.prototype, item.name);
            (0, type_helpers_utils_1.applyFieldDecorators)(OmitObjectType, item);
        });
    }
    applyFields(fields);
    // Register a refresh hook to update the fields when the serialized metadata
    // is loaded from file.
    metadata_loader_1.MetadataLoader.addRefreshHook(() => {
        const { fields } = (0, get_fields_and_decorator_util_1.getFieldsAndDecoratorForType)(classRef, {
            overrideFields: true,
        });
        applyFields(fields);
    });
    return OmitObjectType;
}
exports.OmitType = OmitType;
