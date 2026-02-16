'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const datePicker_anatomy = require('./date-picker.anatomy.cjs');
const useDatePickerContext = require('./use-date-picker-context.cjs');
const useDatePickerViewPropsContext = require('./use-date-picker-view-props-context.cjs');

const DatePickerView = react.forwardRef((props, ref) => {
  const [viewProps, localProps] = createSplitProps.createSplitProps()(props, ["view"]);
  const datePicker = useDatePickerContext.useDatePickerContext();
  return /* @__PURE__ */ jsxRuntime.jsx(useDatePickerViewPropsContext.DatePickerViewPropsProvider, { value: viewProps, children: /* @__PURE__ */ jsxRuntime.jsx(
    factory.ark.div,
    {
      hidden: datePicker.view !== viewProps.view,
      ...datePicker_anatomy.datePickerAnatomy.build().view.attrs,
      ...localProps,
      ref
    }
  ) });
});
DatePickerView.displayName = "DatePickerView";

exports.DatePickerView = DatePickerView;
