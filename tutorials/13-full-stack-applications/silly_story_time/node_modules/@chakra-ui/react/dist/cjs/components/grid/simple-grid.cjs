"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var walkObject = require('../../utils/walk-object.cjs');
var provider = require('../../styled-system/provider.cjs');
var grid = require('./grid.cjs');

const SimpleGrid = React.forwardRef(
  function SimpleGrid2(props, ref) {
    const { columns, minChildWidth, ...rest } = props;
    const sys = provider.useChakraContext();
    const templateColumns = minChildWidth ? widthToColumns(minChildWidth, sys) : countToColumns(columns);
    return /* @__PURE__ */ jsxRuntime.jsx(grid.Grid, { ref, templateColumns, ...rest });
  }
);
function toPx(n) {
  return typeof n === "number" ? `${n}px` : n;
}
function widthToColumns(width, sys) {
  return walkObject.mapObject(width, (value) => {
    const _value = sys.tokens.getVar(`sizes.${value}`, toPx(value));
    return value === null ? null : `repeat(auto-fit, minmax(${_value}, 1fr))`;
  });
}
function countToColumns(count) {
  return walkObject.mapObject(
    count,
    (value) => value === null ? null : `repeat(${value}, minmax(0, 1fr))`
  );
}

exports.SimpleGrid = SimpleGrid;
