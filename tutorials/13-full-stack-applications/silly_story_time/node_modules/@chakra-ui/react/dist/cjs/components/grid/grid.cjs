"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var factory = require('../../styled-system/factory.cjs');

const Grid = React.forwardRef(
  function Grid2(props, ref) {
    const {
      templateAreas,
      column,
      row,
      autoFlow,
      autoRows,
      templateRows,
      autoColumns,
      templateColumns,
      inline,
      ...rest
    } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ...rest,
        ref,
        css: [
          {
            display: inline ? "inline-grid" : "grid",
            gridTemplateAreas: templateAreas,
            gridAutoColumns: autoColumns,
            gridColumn: column,
            gridRow: row,
            gridAutoFlow: autoFlow,
            gridAutoRows: autoRows,
            gridTemplateRows: templateRows,
            gridTemplateColumns: templateColumns
          },
          props.css
        ]
      }
    );
  }
);

exports.Grid = Grid;
