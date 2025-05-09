'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useFieldContext = require('../field/use-field-context.cjs');
const useSelectContext = require('./use-select-context.cjs');

const SelectHiddenSelect = react.forwardRef((props, ref) => {
  const select = useSelectContext.useSelectContext();
  const mergedProps = react$1.mergeProps(select.getHiddenSelectProps(), props);
  const isValueEmpty = select.value.length === 0;
  const field = useFieldContext.useFieldContext();
  return /* @__PURE__ */ jsxRuntime.jsxs(factory.ark.select, { "aria-describedby": field?.ariaDescribedby, ...mergedProps, ref, children: [
    isValueEmpty && /* @__PURE__ */ jsxRuntime.jsx("option", { value: "" }),
    select.collection.items.map((item, index) => /* @__PURE__ */ jsxRuntime.jsx(
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

exports.SelectHiddenSelect = SelectHiddenSelect;
