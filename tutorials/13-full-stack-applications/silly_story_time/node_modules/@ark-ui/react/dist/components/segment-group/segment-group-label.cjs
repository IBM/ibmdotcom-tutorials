'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const segmentGroup_anatomy = require('./segment-group.anatomy.cjs');
const useSegmentGroupContext = require('./use-segment-group-context.cjs');

const SegmentGroupLabel = react.forwardRef((props, ref) => {
  const segmentGroup = useSegmentGroupContext.useSegmentGroupContext();
  const mergedProps = react$1.mergeProps(segmentGroup.getLabelProps(), segmentGroup_anatomy.parts.label.attrs, props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.label, { ...mergedProps, ref });
});
SegmentGroupLabel.displayName = "SegmentGroupLabel";

exports.SegmentGroupLabel = SegmentGroupLabel;
