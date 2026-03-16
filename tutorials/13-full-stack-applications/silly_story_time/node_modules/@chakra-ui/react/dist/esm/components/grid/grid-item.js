"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { compact } from '../../utils/compact.js';
import { mapObject } from '../../utils/walk-object.js';
import { chakra } from '../../styled-system/factory.js';

function spanFn(span) {
  return mapObject(
    span,
    (value) => value === "auto" ? "auto" : `span ${value}/span ${value}`
  );
}
const GridItem = forwardRef(
  function GridItem2(props, ref) {
    const {
      area,
      colSpan,
      colStart,
      colEnd,
      rowEnd,
      rowSpan,
      rowStart,
      ...rest
    } = props;
    const styles = compact({
      gridArea: area,
      gridColumn: spanFn(colSpan),
      gridRow: spanFn(rowSpan),
      gridColumnStart: colStart,
      gridColumnEnd: colEnd,
      gridRowStart: rowStart,
      gridRowEnd: rowEnd
    });
    return /* @__PURE__ */ jsx(chakra.div, { ref, css: styles, ...rest });
  }
);

export { GridItem };
