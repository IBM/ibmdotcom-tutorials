'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useRadioGroupContext = require('./use-radio-group-context.cjs');
const useRadioGroupItemContext = require('./use-radio-group-item-context.cjs');
const useRadioGroupItemPropsContext = require('./use-radio-group-item-props-context.cjs');

const RadioGroupItem = react.forwardRef((props, ref) => {
  const [itemProps, localProps] = createSplitProps.createSplitProps()(props, ["value", "disabled", "invalid"]);
  const radioGroup = useRadioGroupContext.useRadioGroupContext();
  const mergedProps = react$1.mergeProps(radioGroup.getItemProps(itemProps), localProps);
  const itemState = radioGroup.getItemState(itemProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useRadioGroupItemContext.RadioGroupItemProvider, { value: itemState, children: /* @__PURE__ */ jsxRuntime.jsx(useRadioGroupItemPropsContext.RadioGroupItemPropsProvider, { value: itemProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.label, { ...mergedProps, ref }) }) });
});
RadioGroupItem.displayName = "RadioGroupItem";

exports.RadioGroupItem = RadioGroupItem;
