'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSegmentGroupContext = require('./use-segment-group-context.cjs');
const useSegmentGroupItemPropsContext = require('./use-segment-group-item-props-context.cjs');

const SegmentGroupItemHiddenInput = react.forwardRef(
  (props, ref) => {
    const segmentGroup = useSegmentGroupContext.useSegmentGroupContext();
    const itemProps = useSegmentGroupItemPropsContext.useSegmentGroupItemPropsContext();
    const mergedProps = react$1.mergeProps(segmentGroup.getItemHiddenInputProps(itemProps), props);
    return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.input, { ...mergedProps, ref });
  }
);
SegmentGroupItemHiddenInput.displayName = "SegmentGroupItemHiddenInput";

exports.SegmentGroupItemHiddenInput = SegmentGroupItemHiddenInput;
