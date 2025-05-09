'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const segmentGroup_anatomy = require('./segment-group.anatomy.cjs');
const useSegmentGroup = require('./use-segment-group.cjs');
const useSegmentGroupContext = require('./use-segment-group-context.cjs');

const SegmentGroupRoot = react.forwardRef((props, ref) => {
  const [useSegmentGroupProps, localProps] = createSplitProps.createSplitProps()(props, [
    "defaultValue",
    "disabled",
    "form",
    "id",
    "ids",
    "name",
    "onValueChange",
    "orientation",
    "readOnly",
    "value"
  ]);
  const segmentGroup = useSegmentGroup.useSegmentGroup(useSegmentGroupProps);
  const mergedProps = react$1.mergeProps(segmentGroup.getRootProps(), segmentGroup_anatomy.parts.root.attrs, localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useSegmentGroupContext.SegmentGroupProvider, { value: segmentGroup, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
SegmentGroupRoot.displayName = "SegmentGroupRoot";

exports.SegmentGroupRoot = SegmentGroupRoot;
