'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const segmentGroup_anatomy = require('./segment-group.anatomy.cjs');
const useSegmentGroupContext = require('./use-segment-group-context.cjs');
const useSegmentGroupItemPropsContext = require('./use-segment-group-item-props-context.cjs');

const SegmentGroupItemText = react.forwardRef((props, ref) => {
  const segmentGroup = useSegmentGroupContext.useSegmentGroupContext();
  const itemProps = useSegmentGroupItemPropsContext.useSegmentGroupItemPropsContext();
  const mergedProps = react$1.mergeProps(
    segmentGroup.getItemTextProps(itemProps),
    segmentGroup_anatomy.parts.itemText.attrs,
    props
  );
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref });
});
SegmentGroupItemText.displayName = "SegmentGroupItemText";

exports.SegmentGroupItemText = SegmentGroupItemText;
