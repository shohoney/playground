"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolveObjectType = exports.RESOLVE_OBJECT_TYPE_METADATA = void 0;
const common_1 = require("@nestjs/common");
/**
 * Designates an instance method as a type resolver for an object type
 */
exports.RESOLVE_OBJECT_TYPE_METADATA = 'graphql:resolve_object_type';
function ResolveObjectType() {
    return (target, key, descriptor) => {
        (0, common_1.SetMetadata)(exports.RESOLVE_OBJECT_TYPE_METADATA, true)(target, key, descriptor);
    };
}
exports.ResolveObjectType = ResolveObjectType;
