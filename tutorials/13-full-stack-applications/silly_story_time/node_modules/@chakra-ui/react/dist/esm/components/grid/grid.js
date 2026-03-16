"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { chakra } from '../../styled-system/factory.js';

const Grid = forwardRef(
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
    return /* @__PURE__ */ jsx(
      chakra.div,
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

export { Grid };
