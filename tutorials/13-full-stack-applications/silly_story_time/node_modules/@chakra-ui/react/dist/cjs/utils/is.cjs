"use strict";
'use strict';

const isObject = (v) => v != null && typeof v === "object" && !Array.isArray(v);
const isCssVar = (v) => /^var\(--.+\)$/.test(v);
const isString = (v) => typeof v === "string";
const isFunction = (v) => typeof v === "function";

exports.isCssVar = isCssVar;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isString = isString;
