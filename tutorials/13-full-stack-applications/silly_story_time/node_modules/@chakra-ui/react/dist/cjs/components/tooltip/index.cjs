"use strict";
'use strict';

var tooltip = require('./tooltip.cjs');
var namespace = require('./namespace.cjs');
var tooltip$1 = require('@ark-ui/react/tooltip');



exports.TooltipArrow = tooltip.TooltipArrow;
exports.TooltipArrowTip = tooltip.TooltipArrowTip;
exports.TooltipContent = tooltip.TooltipContent;
exports.TooltipContext = tooltip.TooltipContext;
exports.TooltipPositioner = tooltip.TooltipPositioner;
exports.TooltipPropsProvider = tooltip.TooltipPropsProvider;
exports.TooltipRoot = tooltip.TooltipRoot;
exports.TooltipRootProvider = tooltip.TooltipRootProvider;
exports.TooltipTrigger = tooltip.TooltipTrigger;
exports.useTooltipStyles = tooltip.useTooltipStyles;
exports.Tooltip = namespace;
Object.defineProperty(exports, "useTooltip", {
  enumerable: true,
  get: function () { return tooltip$1.useTooltip; }
});
Object.defineProperty(exports, "useTooltipContext", {
  enumerable: true,
  get: function () { return tooltip$1.useTooltipContext; }
});
