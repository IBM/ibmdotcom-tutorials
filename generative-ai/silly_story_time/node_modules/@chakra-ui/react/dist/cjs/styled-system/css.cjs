"use strict";
'use strict';

var compact = require('../utils/compact.cjs');
var is = require('../utils/is.cjs');
var memo = require('../utils/memo.cjs');
var merge = require('../utils/merge.cjs');
var walkObject = require('../utils/walk-object.cjs');
var sortAtRules = require('./sort-at-rules.cjs');

const importantRegex = /\s*!(important)?/i;
const isImportant = (v) => is.isString(v) ? importantRegex.test(v) : false;
const withoutImportant = (v) => is.isString(v) ? v.replace(importantRegex, "").trim() : v;
function createCssFn(context) {
  const { transform, conditions, normalize } = context;
  const mergeFn = mergeCss(context);
  return memo.memo(function cssFn(...styleArgs) {
    const styles = mergeFn(...styleArgs);
    const normalized = normalize(styles);
    const result = /* @__PURE__ */ Object.create(null);
    walkObject.walkObject(normalized, (value, paths) => {
      const important = isImportant(value);
      if (value == null) return;
      const [prop, ...selectors] = conditions.sort(paths).map(conditions.resolve);
      if (important) {
        value = withoutImportant(value);
      }
      let transformed = transform(prop, value) ?? /* @__PURE__ */ Object.create(null);
      transformed = walkObject.walkObject(
        transformed,
        (v) => is.isString(v) && important ? `${v} !important` : v,
        { getKey: (prop2) => conditions.expandAtRule(prop2) }
      );
      mergeByPath(result, selectors.flat(), transformed);
    });
    return sortAtRules.sortAtRules(result);
  });
}
function mergeByPath(target, paths, value) {
  let acc = target;
  for (const path of paths) {
    if (!path) continue;
    if (!acc[path]) acc[path] = /* @__PURE__ */ Object.create(null);
    acc = acc[path];
  }
  merge.mergeWith(acc, value);
}
function compactFn(...styles) {
  return styles.filter(
    (style) => is.isObject(style) && Object.keys(compact.compact(style)).length > 0
  );
}
function mergeCss(ctx) {
  function resolve(styles) {
    const comp = compactFn(...styles);
    if (comp.length === 1) return comp;
    return comp.map((style) => ctx.normalize(style));
  }
  return memo.memo(function mergeFn(...styles) {
    return merge.mergeWith({}, ...resolve(styles));
  });
}

exports.createCssFn = createCssFn;
