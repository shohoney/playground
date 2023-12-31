"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLTypesLoader = void 0;
const tslib_1 = require("tslib");
const merge_1 = require("@graphql-tools/merge");
const common_1 = require("@nestjs/common");
const glob = require("fast-glob");
const fs = require("fs");
const lodash_1 = require("lodash");
const util = require("util");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const normalize = require('normalize-path');
const readFile = util.promisify(fs.readFile);
let GraphQLTypesLoader = exports.GraphQLTypesLoader = class GraphQLTypesLoader {
    async mergeTypesByPaths(paths) {
        if (!paths || paths.length === 0) {
            return null;
        }
        const types = await this.getTypesFromPaths(paths);
        const flatTypes = (0, lodash_1.flatten)(types);
        return (0, merge_1.mergeTypeDefs)(flatTypes, {
            throwOnConflict: true,
            commentDescriptions: true,
            reverseDirectives: true,
        });
    }
    async getTypesFromPaths(paths) {
        const includeNodeModules = this.includeNodeModules(paths);
        paths = Array.isArray(paths)
            ? paths.map((path) => normalize(path))
            : normalize(paths);
        const filePaths = await glob(paths, {
            ignore: includeNodeModules ? [] : ['node_modules'],
        });
        if (filePaths.length === 0) {
            throw new Error(`No type definitions were found with the specified file name patterns: "${paths}". Please make sure there is at least one file that matches the given patterns.`);
        }
        const fileContentsPromises = filePaths.sort().map((filePath) => {
            return readFile(filePath.toString(), 'utf8');
        });
        return Promise.all(fileContentsPromises);
    }
    includeNodeModules(pathOrPaths) {
        if (Array.isArray(pathOrPaths)) {
            return pathOrPaths.some((path) => path.includes('node_modules'));
        }
        return pathOrPaths.includes('node_modules');
    }
};
exports.GraphQLTypesLoader = GraphQLTypesLoader = tslib_1.__decorate([
    (0, common_1.Injectable)()
], GraphQLTypesLoader);
