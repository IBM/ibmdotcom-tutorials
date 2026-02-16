"use strict";
'use strict';

var config = require('../../styled-system/config.cjs');
var checkmark = require('./checkmark.cjs');
var checkbox = require('@ark-ui/react/checkbox');

const checkboxSlotRecipe = config.defineSlotRecipe({
  slots: checkbox.checkboxAnatomy.keys(),
  className: "chakra-checkbox",
  base: {
    root: {
      display: "inline-flex",
      gap: "2",
      alignItems: "center",
      verticalAlign: "top",
      position: "relative"
    },
    control: checkmark.checkmarkRecipe.base,
    label: {
      fontWeight: "medium",
      userSelect: "none",
      _disabled: {
        opacity: "0.5"
      }
    }
  },
  variants: {
    size: {
      xs: {
        root: { gap: "1.5" },
        label: { textStyle: "xs" },
        control: checkmark.checkmarkRecipe.variants?.size?.xs
      },
      sm: {
        root: { gap: "2" },
        label: { textStyle: "sm" },
        control: checkmark.checkmarkRecipe.variants?.size?.sm
      },
      md: {
        root: { gap: "2.5" },
        label: { textStyle: "sm" },
        control: checkmark.checkmarkRecipe.variants?.size?.md
      },
      lg: {
        root: { gap: "3" },
        label: { textStyle: "md" },
        control: checkmark.checkmarkRecipe.variants?.size?.lg
      }
    },
    variant: {
      outline: {
        control: checkmark.checkmarkRecipe.variants?.variant?.outline
      },
      solid: {
        control: checkmark.checkmarkRecipe.variants?.variant?.solid
      },
      subtle: {
        control: checkmark.checkmarkRecipe.variants?.variant?.subtle
      }
    }
  },
  defaultVariants: {
    variant: "solid",
    size: "md"
  }
});

exports.checkboxSlotRecipe = checkboxSlotRecipe;
