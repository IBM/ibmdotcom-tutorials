"use strict";
'use strict';

var walkObject = require('../../utils/walk-object.cjs');

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
    "&": walkObject.mapObject(direction, (value) => styles[value])
  };
}

exports.getSeparatorStyles = getSeparatorStyles;
