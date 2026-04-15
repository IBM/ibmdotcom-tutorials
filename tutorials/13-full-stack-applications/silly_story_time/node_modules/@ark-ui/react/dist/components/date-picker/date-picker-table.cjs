'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useDatePickerContext = require('./use-date-picker-context.cjs');
const useDatePickerTablePropsContext = require('./use-date-picker-table-props-context.cjs');
const useDatePickerViewPropsContext = require('./use-date-picker-view-props-context.cjs');

const DatePickerTable = react.forwardRef((props, ref) => {
  const [{ columns }, localProps] = createSplitProps.createSplitProps()(props, ["columns"]);
  const datePicker = useDatePickerContext.useDatePickerContext();
  const viewProps = useDatePickerViewPropsContext.useDatePickerViewPropsContext();
  const tableProps = { columns, id: react.useId(), ...viewProps };
  const mergedProps = react$1.mergeProps(datePicker.getTableProps(tableProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useDatePickerTablePropsContext.DatePickerTablePropsProvider, { value: tableProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.table, { ...mergedProps, ref }) });
});
DatePickerTable.displayName = "DatePickerTable";

exports.DatePickerTable = DatePickerTable;
