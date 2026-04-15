// src/utils/run-if-fn.ts
var isFunction = (value) => typeof value === "function";
function runIfFn(valueOrFn, ...args) {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

export {
  runIfFn
};
//# sourceMappingURL=chunk-UV3F75RF.mjs.map