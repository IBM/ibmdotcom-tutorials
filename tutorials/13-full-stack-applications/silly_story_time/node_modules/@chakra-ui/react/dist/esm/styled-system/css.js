"use strict";
import { compact } from '../utils/compact.js';
import { isString, isObject } from '../utils/is.js';
import { memo } from '../utils/memo.js';
import { mergeWith } from '../utils/merge.js';
import { walkObject } from '../utils/walk-object.js';
import { sortAtRules } from './sort-at-rules.js';

const importantRegex = /\s*!(important)?/i;
const isImportant = (v) => isString(v) ? importantRegex.test(v) : false;
const withoutImportant = (v) => isString(v) ? v.replace(importantRegex, "").trim() : v;
function createCssFn(context) {
  const { transform, conditions, normalize } = context;
  const mergeFn = mergeCss(context);
  return memo(function cssFn(...styleArgs) {
    const styles = mergeFn(...styleArgs);
    const normalized = normalize(styles);
    const result = /* @__PURE__ */ Object.create(null);
    walkObject(normalized, (value, paths) => {
      const important = isImportant(value);
      if (value == null) return;
      const [prop, ...selectors] = conditions.sort(paths).map(conditions.resolve);
      if (important) {
        value = withoutImportant(value);
      }
      let transformed = transform(prop, value) ?? /* @__PURE__ */ Object.create(null);
      transformed = walkObject(
        transformed,
        (v) => isString(v) && important ? `${v} !important` : v,
        { getKey: (prop2) => conditions.expandAtRule(prop2) }
      );
      mergeByPath(result, selectors.flat(), transformed);
    });
    return sortAtRules(result);
  });
}
function mergeByPath(target, paths, value) {
  let acc = target;
  for (const path of paths) {
    if (!path) continue;
    if (!acc[path]) acc[path] = /* @__PURE__ */ Object.create(null);
    acc = acc[path];
  }
  mergeWith(acc, value);
}
function compactFn(...styles) {
  return styles.filter(
    (style) => isObject(style) && Object.keys(compact(style)).length > 0
  );
}
function mergeCss(ctx) {
  function resolve(styles) {
    const comp = compactFn(...styles);
    if (comp.length === 1) return comp;
    return comp.map((style) => ctx.normalize(style));
  }
  return memo(function mergeFn(...styles) {
    return mergeWith({}, ...resolve(styles));
  });
}

export { createCssFn };
