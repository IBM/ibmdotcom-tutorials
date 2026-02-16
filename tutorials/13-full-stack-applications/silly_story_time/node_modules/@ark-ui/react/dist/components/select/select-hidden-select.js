'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldContext } from '../field/use-field-context.js';
import { useSelectContext } from './use-select-context.js';

const SelectHiddenSelect = forwardRef((props, ref) => {
  const select = useSelectContext();
  const mergedProps = mergeProps(select.getHiddenSelectProps(), props);
  const isValueEmpty = select.value.length === 0;
  const field = useFieldContext();
  return /* @__PURE__ */ jsxs(ark.select, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref, children: [
    isValueEmpty && /* @__PURE__ */ jsx("option", { value: "" }),
    select.collection.items.map((item, index) => /* @__PURE__ */ jsx(
      "option",
      {
        value: select.collection.getItemValue(item) ?? "",
        disabled: select.collection.getItemDisabled(item),
        children: select.collection.stringifyItem(item)
      },
      index
    ))
  ] });
});
SelectHiddenSelect.displayName = "SelectHiddenSelect";

export { SelectHiddenSelect };
