"use strict";
'use strict';

var anatomy = require('../../anatomy.cjs');
var config = require('../../styled-system/config.cjs');
var radiomark = require('./radiomark.cjs');

const radioGroupSlotRecipe = config.defineSlotRecipe({
  className: "chakra-radio-group",
  slots: anatomy.radioGroupAnatomy.keys(),
  base: {
    item: {
      display: "inline-flex",
      alignItems: "center",
      position: "relative",
      fontWeight: "medium",
      _disabled: {
        cursor: "disabled"
      }
    },
    itemControl: radiomark.radiomarkRecipe.base,
    label: {
      userSelect: "none",
      textStyle: "sm",
      _disabled: {
        opacity: "0.5"
      }
    }
  },
  variants: {
    variant: {
      outline: {
        itemControl: radiomark.radiomarkRecipe.variants?.variant?.outline
      },
      subtle: {
        itemControl: radiomark.radiomarkRecipe.variants?.variant?.subtle
      },
      solid: {
        itemControl: radiomark.radiomarkRecipe.variants?.variant?.solid
      }
    },
    size: {
      xs: {
        item: { textStyle: "xs", gap: "1.5" },
        itemControl: radiomark.radiomarkRecipe.variants?.size?.xs
      },
      sm: {
        item: { textStyle: "sm", gap: "2" },
        itemControl: radiomark.radiomarkRecipe.variants?.size?.sm
      },
      md: {
        item: { textStyle: "sm", gap: "2.5" },
        itemControl: radiomark.radiomarkRecipe.variants?.size?.md
      },
      lg: {
        item: { textStyle: "md", gap: "3" },
        itemControl: radiomark.radiomarkRecipe.variants?.size?.lg
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "solid"
  }
});

exports.radioGroupSlotRecipe = radioGroupSlotRecipe;
