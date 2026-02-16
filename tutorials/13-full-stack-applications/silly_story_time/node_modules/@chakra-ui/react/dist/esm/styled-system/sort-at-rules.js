"use strict";
import { isObject } from '../utils/is.js';
import { sortAtParams } from './sort-at-params.js';

function sortQueries(queries) {
  return queries.sort(([a], [b]) => sortAtParams(a, b));
}
function sortAtRules(obj) {
  const mediaQueries = [];
  const containerQueries = [];
  const rest = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith("@media")) {
      mediaQueries.push([key, value]);
    } else if (key.startsWith("@container")) {
      containerQueries.push([key, value]);
    } else if (isObject(value)) {
      rest[key] = sortAtRules(value);
    } else {
      rest[key] = value;
    }
  }
  const sortedMediaQueries = sortQueries(mediaQueries);
  const sortedContainerQueries = sortQueries(containerQueries);
  return {
    ...rest,
    ...Object.fromEntries(sortedMediaQueries),
    ...Object.fromEntries(sortedContainerQueries)
  };
}

export { sortAtRules };
