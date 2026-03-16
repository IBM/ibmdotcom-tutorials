"use strict";
const mapEntries = (obj, fn) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => fn(key, value))
  );
};
const createConditions = (options) => {
  const { breakpoints, conditions: conds = {} } = options;
  const conditions = mapEntries(conds, (key, value) => [`_${key}`, value]);
  const values = Object.assign({}, conditions, breakpoints.conditions);
  function keys() {
    return Object.keys(values);
  }
  function has(key) {
    return keys().includes(key) || /^@|&|&$/.test(key) || key.startsWith("_");
  }
  function sort(paths) {
    return paths.filter((v) => v !== "base").sort((a, b) => {
      const aa = has(a);
      const bb = has(b);
      if (aa && !bb) return 1;
      if (!aa && bb) return -1;
      return 0;
    });
  }
  function expandAtRule(key) {
    if (!key.startsWith("@breakpoint")) return key;
    return breakpoints.getCondition(key.replace("@breakpoint ", ""));
  }
  function resolve(key) {
    return Reflect.get(values, key) || key;
  }
  return {
    keys,
    sort,
    has,
    resolve,
    breakpoints: breakpoints.keys(),
    expandAtRule
  };
};

export { createConditions };
