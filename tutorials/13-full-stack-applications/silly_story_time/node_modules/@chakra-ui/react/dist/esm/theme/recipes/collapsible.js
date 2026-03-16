"use strict";
import { defineSlotRecipe } from '../../styled-system/config.js';
import { collapsibleAnatomy } from '@ark-ui/react/collapsible';

const collapsibleSlotRecipe = defineSlotRecipe({
  slots: collapsibleAnatomy.keys(),
  className: "chakra-collapsible",
  base: {
    content: {
      overflow: "hidden",
      _open: {
        animationName: "expand-height, fade-in",
        animationDuration: "moderate"
      },
      _closed: {
        animationName: "collapse-height, fade-out",
        animationDuration: "moderate"
      }
    }
  }
});

export { collapsibleSlotRecipe };
