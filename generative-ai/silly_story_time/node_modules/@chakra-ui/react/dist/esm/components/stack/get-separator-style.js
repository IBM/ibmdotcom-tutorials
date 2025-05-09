"use strict";
import { mapObject } from '../../utils/walk-object.js';

function getSeparatorStyles(options) {
  const { gap, direction } = options;
  const styles = {
    column: {
      marginY: gap,
      marginX: 0,
      borderInlineStartWidth: 0,
      borderTopWidth: "1px"
    },
    "column-reverse": {
      marginY: gap,
      marginX: 0,
      borderInlineStartWidth: 0,
      borderTopWidth: "1px"
    },
    row: {
      marginX: gap,
      marginY: 0,
      borderInlineStartWidth: "1px",
      borderTopWidth: 0
    },
    "row-reverse": {
      marginX: gap,
      marginY: 0,
      borderInlineStartWidth: "1px",
      borderTopWidth: 0
    }
  };
  return {
    "&": mapObject(direction, (value) => styles[value])
  };
}

export { getSeparatorStyles };
