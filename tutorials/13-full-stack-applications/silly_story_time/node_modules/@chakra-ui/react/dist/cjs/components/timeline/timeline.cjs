"use strict";
"use client";
'use strict';

var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const {
  withProvider,
  withContext,
  useStyles: useTimelineStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "timeline" });
const TimelineRoot = withProvider(
  "div",
  "root",
  { defaultProps: { role: "list" } }
);
const TimelineRootPropsProvider = PropsProvider;
const TimelineItem = withContext(
  "div",
  "item",
  { defaultProps: { role: "listitem" } }
);
const TimelineSeparator = withContext("div", "separator");
const TimelineIndicator = withContext("div", "indicator");
const TimelineContent = withContext("div", "content");
const TimelineTitle = withContext(
  "div",
  "title"
);
const TimelineDescription = withContext("div", "description");
const TimelineConnector = withContext("div", "connector");

exports.TimelineConnector = TimelineConnector;
exports.TimelineContent = TimelineContent;
exports.TimelineDescription = TimelineDescription;
exports.TimelineIndicator = TimelineIndicator;
exports.TimelineItem = TimelineItem;
exports.TimelineRoot = TimelineRoot;
exports.TimelineRootPropsProvider = TimelineRootPropsProvider;
exports.TimelineSeparator = TimelineSeparator;
exports.TimelineTitle = TimelineTitle;
exports.useTimelineStyles = useTimelineStyles;
