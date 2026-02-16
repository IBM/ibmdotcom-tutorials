"use strict";
'use strict';

var config = require('../../styled-system/config.cjs');
var collapsible = require('@ark-ui/react/collapsible');

const collapsibleSlotRecipe = config.defineSlotRecipe({
  slots: collapsible.collapsibleAnatomy.keys(),
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

exports.collapsibleSlotRecipe = collapsibleSlotRecipe;
