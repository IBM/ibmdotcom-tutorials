"use strict";
'use strict';

const uniq = (...items) => {
  const _items = items.filter(Boolean);
  return Array.from(new Set(_items));
};

exports.uniq = uniq;
