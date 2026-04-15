"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { mapObject } from '../../utils/walk-object.js';
import { useChakraContext } from '../../styled-system/provider.js';
import { Grid } from './grid.js';

const SimpleGrid = forwardRef(
  function SimpleGrid2(props, ref) {
    const { columns, minChildWidth, ...rest } = props;
    const sys = useChakraContext();
    const templateColumns = minChildWidth ? widthToColumns(minChildWidth, sys) : countToColumns(columns);
    return /* @__PURE__ */ jsx(Grid, { ref, templateColumns, ...rest });
  }
);
function toPx(n) {
  return typeof n === "number" ? `${n}px` : n;
}
function widthToColumns(width, sys) {
  return mapObject(width, (value) => {
    const _value = sys.tokens.getVar(`sizes.${value}`, toPx(value));
    return value === null ? null : `repeat(auto-fit, minmax(${_value}, 1fr))`;
  });
}
function countToColumns(count) {
  return mapObject(
    count,
    (value) => value === null ? null : `repeat(${value}, minmax(0, 1fr))`
  );
}

export { SimpleGrid };
