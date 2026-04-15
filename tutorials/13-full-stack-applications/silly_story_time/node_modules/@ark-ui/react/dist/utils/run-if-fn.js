'use client';
const isFunction = (value) => typeof value === "function";
const runIfFn = (valueOrFn, ...args) => isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;

export { runIfFn };
