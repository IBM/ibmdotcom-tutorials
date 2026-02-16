"use strict";
'use strict';

var config = require('../../styled-system/config.cjs');
var tooltip = require('@ark-ui/react/tooltip');

const tooltipSlotRecipe = config.defineSlotRecipe({
  slots: tooltip.tooltipAnatomy.keys(),
  className: "chakra-tooltip",
  base: {
    content: {
      "--tooltip-bg": "colors.bg.inverted",
      bg: "var(--tooltip-bg)",
      color: "fg.inverted",
      px: "2.5",
      py: "1",
      borderRadius: "l2",
      fontWeight: "medium",
      textStyle: "xs",
      boxShadow: "md",
      maxW: "xs",
      zIndex: "tooltip",
      transformOrigin: "var(--transform-origin)",
      _open: {
        animationStyle: "scale-fade-in",
        animationDuration: "fast"
      },
      _closed: {
        animationStyle: "scale-fade-out",
        animationDuration: "fast"
      }
    },
    arrow: {
      "--arrow-size": "sizes.2",
      "--arrow-background": "var(--tooltip-bg)"
    },
    arrowTip: {
      borderTopWidth: "1px",
      borderInlineStartWidth: "1px",
      borderColor: "var(--tooltip-bg)"
    }
  }
});

exports.tooltipSlotRecipe = tooltipSlotRecipe;
