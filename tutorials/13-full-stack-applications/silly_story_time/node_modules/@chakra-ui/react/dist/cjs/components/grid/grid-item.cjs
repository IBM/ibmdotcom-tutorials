"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var compact = require('../../utils/compact.cjs');
var walkObject = require('../../utils/walk-object.cjs');
var factory = require('../../styled-system/factory.cjs');

function spanFn(span) {
  return walkObject.mapObject(
    span,
    (value) => value === "auto" ? "auto" : `span ${value}/span ${value}`
  );
}
const GridItem = React.forwardRef(
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
    const styles = compact.compact({
      gridArea: area,
      gridColumn: spanFn(colSpan),
      gridRow: spanFn(rowSpan),
      gridColumnStart: colStart,
      gridColumnEnd: colEnd,
      gridRowStart: rowStart,
      gridRowEnd: rowEnd
    });
    return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.div, { ref, css: styles, ...rest });
  }
);

exports.GridItem = GridItem;
