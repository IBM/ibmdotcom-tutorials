"use strict";
import { toRem, toPx } from './unit-conversion.js';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
function createBreakpoints(breakpoints) {
  const sorted = sort(breakpoints);
  const values = Object.fromEntries(sorted);
  function get(name) {
    return values[name];
  }
  function only(name) {
    return build(get(name));
  }
  function getRanges() {
    const breakpoints2 = Object.keys(values);
    const permuations = getPermutations(breakpoints2);
    const results = breakpoints2.flatMap((name) => {
      const value = get(name);
      const down2 = [
        `${name}Down`,
        build({ max: adjust(value.min) })
      ];
      const up2 = [name, build({ min: value.min })];
      const _only = [`${name}Only`, only(name)];
      return [up2, _only, down2];
    }).filter(([, value]) => value !== "").concat(
      permuations.map(([min, max]) => {
        const minValue = get(min);
        const maxValue = get(max);
        return [
          `${min}To${capitalize(max)}`,
          build({ min: minValue.min, max: adjust(maxValue.min) })
        ];
      })
    );
    return Object.fromEntries(results);
  }
  function toConditions() {
    const ranges = getRanges();
    return Object.fromEntries(Object.entries(ranges));
  }
  const conditions = toConditions();
  const getCondition = (key) => {
    return conditions[key];
  };
  function keys() {
    return ["base", ...Object.keys(values)];
  }
  function up(name) {
    return build({ min: get(name).min });
  }
  function down(name) {
    return build({ max: adjust(get(name).min) });
  }
  return {
    values: Object.values(values),
    only,
    keys,
    conditions,
    getCondition,
    up,
    down
  };
}
function adjust(value) {
  const computedMax = parseFloat(toPx(value) ?? "") - 0.04;
  return toRem(`${computedMax}px`);
}
function sort(breakpoints) {
  const entries = Object.entries(breakpoints).sort(([, minA], [, minB]) => {
    return parseInt(minA, 10) < parseInt(minB, 10) ? -1 : 1;
  });
  return entries.map(([name, min], index, entries2) => {
    let max = null;
    if (index <= entries2.length - 1) {
      max = entries2[index + 1]?.[1];
    }
    if (max != null) {
      max = adjust(max);
    }
    return [name, { name, min: toRem(min), max }];
  });
}
function getPermutations(values) {
  const result = [];
  values.forEach((current, index) => {
    let idx = index;
    idx++;
    let next = values[idx];
    while (next) {
      result.push([current, next]);
      idx++;
      next = values[idx];
    }
  });
  return result;
}
function build({ min, max }) {
  if (min == null && max == null) return "";
  return [
    "@media screen",
    min && `(min-width: ${min})`,
    max && `(max-width: ${max})`
  ].filter(Boolean).join(" and ");
}

export { createBreakpoints };
