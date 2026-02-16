"use strict";
function callAll(...fns) {
  return function mergedFn(...args) {
    fns.forEach((fn) => fn?.(...args));
  };
}

export { callAll };
