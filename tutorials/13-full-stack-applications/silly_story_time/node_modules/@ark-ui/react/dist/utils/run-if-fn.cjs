'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const isFunction = (value) => typeof value === "function";
const runIfFn = (valueOrFn, ...args) => isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;

exports.runIfFn = runIfFn;
