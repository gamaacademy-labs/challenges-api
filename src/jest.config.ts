"use strict";
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    modulePathIgnorePatterns: [
        './dist'
    ],
    globals: {
        'ts-jest': {}
    }
};
exports.default = config;
