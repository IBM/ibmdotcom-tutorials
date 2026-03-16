"use strict";
"use client";
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';

const {
  withProvider,
  withContext,
  useStyles: useTimelineStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "timeline" });
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

export { TimelineConnector, TimelineContent, TimelineDescription, TimelineIndicator, TimelineItem, TimelineRoot, TimelineRootPropsProvider, TimelineSeparator, TimelineTitle, useTimelineStyles };
