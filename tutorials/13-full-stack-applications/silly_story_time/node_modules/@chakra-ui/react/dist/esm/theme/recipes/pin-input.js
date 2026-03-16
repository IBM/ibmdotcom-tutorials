"use strict";
import { defineSlotRecipe } from '../../styled-system/config.js';
import { mapEntries } from '../../utils/entries.js';
import { inputRecipe } from './input.js';
import { pinInputAnatomy } from '@ark-ui/react/pin-input';

const { variants, defaultVariants } = inputRecipe;
const pinInputSlotRecipe = defineSlotRecipe({
  className: "chakra-pin-input",
  slots: pinInputAnatomy.keys(),
  base: {
    input: {
      ...inputRecipe.base,
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
    size: mapEntries(variants.size, (key, value) => [key, { input: value }]),
    variant: mapEntries(variants.variant, (key, value) => [
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

export { pinInputSlotRecipe };
