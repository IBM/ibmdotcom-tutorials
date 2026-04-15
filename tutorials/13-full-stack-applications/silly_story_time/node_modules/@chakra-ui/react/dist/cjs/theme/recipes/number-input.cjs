"use strict";
'use strict';

var config = require('../../styled-system/config.cjs');
var entries = require('../../utils/entries.cjs');
var input = require('./input.cjs');
var numberInput = require('@ark-ui/react/number-input');

const triggerStyle = config.defineStyle({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: "1",
  userSelect: "none",
  cursor: "button",
  lineHeight: "1",
  color: "fg.muted",
  "--stepper-base-radius": "radii.l1",
  "--stepper-radius": "calc(var(--stepper-base-radius) + 1px)",
  _icon: {
    boxSize: "1em"
  },
  _disabled: {
    opacity: "0.5"
  },
  _hover: {
    bg: "bg.muted"
  },
  _active: {
    bg: "bg.emphasized"
  }
});
const numberInputSlotRecipe = config.defineSlotRecipe({
  className: "chakra-number-input",
  slots: numberInput.numberInputAnatomy.keys(),
  base: {
    root: {
      position: "relative",
      zIndex: "0",
      isolation: "isolate"
    },
    input: {
      ...input.inputRecipe.base,
      verticalAlign: "top",
      pe: "calc(var(--stepper-width) + 0.5rem)"
    },
    control: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: "0",
      insetEnd: "0px",
      margin: "1px",
      width: "var(--stepper-width)",
      height: "calc(100% - 2px)",
      zIndex: "1",
      borderStartWidth: "1px",
      divideY: "1px"
    },
    incrementTrigger: {
      ...triggerStyle,
      borderTopEndRadius: "var(--stepper-radius)"
    },
    decrementTrigger: {
      ...triggerStyle,
      borderBottomEndRadius: "var(--stepper-radius)"
    },
    valueText: {
      fontWeight: "medium",
      fontFeatureSettings: "pnum",
      fontVariantNumeric: "proportional-nums"
    }
  },
  variants: {
    size: {
      xs: {
        input: input.inputRecipe.variants.size.xs,
        control: {
          fontSize: "2xs",
          "--stepper-width": "sizes.4"
        }
      },
      sm: {
        input: input.inputRecipe.variants.size.sm,
        control: {
          fontSize: "xs",
          "--stepper-width": "sizes.5"
        }
      },
      md: {
        input: input.inputRecipe.variants.size.md,
        control: {
          fontSize: "sm",
          "--stepper-width": "sizes.6"
        }
      },
      lg: {
        input: input.inputRecipe.variants.size.lg,
        control: {
          fontSize: "sm",
          "--stepper-width": "sizes.6"
        }
      }
    },
    variant: entries.mapEntries(input.inputRecipe.variants.variant, (key, variantStyles) => [
      key,
      { input: variantStyles }
    ])
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  }
});

exports.numberInputSlotRecipe = numberInputSlotRecipe;
