"use strict";
'use strict';

var segmentGroup = require('./segment-group.cjs');
var segmentGroup$1 = require('@ark-ui/react/segment-group');
var namespace = require('./namespace.cjs');



exports.SegmentGroupContext = segmentGroup.SegmentGroupContext;
exports.SegmentGroupIndicator = segmentGroup.SegmentGroupIndicator;
exports.SegmentGroupItem = segmentGroup.SegmentGroupItem;
exports.SegmentGroupItemContext = segmentGroup.SegmentGroupItemContext;
exports.SegmentGroupItemHiddenInput = segmentGroup.SegmentGroupItemHiddenInput;
exports.SegmentGroupItemText = segmentGroup.SegmentGroupItemText;
exports.SegmentGroupItems = segmentGroup.SegmentGroupItems;
exports.SegmentGroupPropsProvider = segmentGroup.SegmentGroupPropsProvider;
exports.SegmentGroupRoot = segmentGroup.SegmentGroupRoot;
exports.SegmentGroupRootProvider = segmentGroup.SegmentGroupRootProvider;
exports.useSegmentGroupStyles = segmentGroup.useSegmentGroupStyles;
Object.defineProperty(exports, "useSegmentGroup", {
  enumerable: true,
  get: function () { return segmentGroup$1.useSegmentGroup; }
});
Object.defineProperty(exports, "useSegmentGroupContext", {
  enumerable: true,
  get: function () { return segmentGroup$1.useSegmentGroupContext; }
});
Object.defineProperty(exports, "useSegmentGroupItemContext", {
  enumerable: true,
  get: function () { return segmentGroup$1.useSegmentGroupItemContext; }
});
exports.SegmentGroup = namespace;
