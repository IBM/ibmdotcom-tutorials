'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef, useId } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useDatePickerContext } from './use-date-picker-context.js';
import { DatePickerTablePropsProvider } from './use-date-picker-table-props-context.js';
import { useDatePickerViewPropsContext } from './use-date-picker-view-props-context.js';

const DatePickerTable = forwardRef((props, ref) => {
  const [{ columns }, localProps] = createSplitProps()(props, ["columns"]);
  const datePicker = useDatePickerContext();
  const viewProps = useDatePickerViewPropsContext();
  const tableProps = { columns, id: useId(), ...viewProps };
  const mergedProps = mergeProps(datePicker.getTableProps(tableProps), localProps);
  return /* @__PURE__ */ jsx(DatePickerTablePropsProvider, { value: tableProps, children: /* @__PURE__ */ jsx(ark.table, { ...mergedProps, ref }) });
});
DatePickerTable.displayName = "DatePickerTable";

export { DatePickerTable };
