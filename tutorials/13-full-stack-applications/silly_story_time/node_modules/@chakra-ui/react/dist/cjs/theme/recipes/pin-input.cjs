"use strict";
'use strict';

var config = require('../../styled-system/config.cjs');
var entries = require('../../utils/entries.cjs');
var input = require('./input.cjs');
var pinInput = require('@ark-ui/react/pin-input');

const { variants, defaultVariants } = input.inputRecipe;
const pinInputSlotRecipe = config.defineSlotRecipe({
  className: "chakra-pin-input",
  slots: pinInput.pinInputAnatomy.keys(),
  base: {
    input: {
      ...input.inputRecipe.base,
      textAlign: "center",
      width: "var(--input-height)"
    },
    control: {
      display: "inline-flex",
      gap: "2",
      isolation: "isolate"
    }
  },
  variants: {
    size: entries.mapEntries(variants.size, (key, value) => [key, { input: value }]),
    variant: entries.mapEntries(variants.variant, (key, value) => [
      key,
      { input: value }
    ]),
    attached: {
      true: {
        control: {
          gap: "0",
          spaceX: "-1px"
        },
        input: {
          _notFirst: { borderStartRadius: "0" },
          _notLast: { borderEndRadius: "0" },
          _focusVisible: { zIndex: "1" }
        }
      }
    }
  },
  defaultVariants
});

exports.pinInputSlotRecipe = pinInputSlotRecipe;
