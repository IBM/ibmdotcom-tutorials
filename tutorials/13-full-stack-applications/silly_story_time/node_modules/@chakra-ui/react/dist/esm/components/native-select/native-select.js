"use strict";
"use client";
import { jsx, jsxs } from 'react/jsx-runtime';
import { useFieldContext, Field } from '@ark-ui/react/field';
import { forwardRef } from 'react';
import { createContext } from '../../create-context.js';
import { dataAttr } from '../../utils/attr.js';
import { cx } from '../../utils/cx.js';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { chakra } from '../../styled-system/factory.js';
import { ChevronDownIcon } from '../icons.js';

const [NativeSelectBasePropsProvider, useNativeSelectBaseProps] = createContext({
  name: "NativeSelectBasePropsContext",
  hookName: "useNativeSelectBaseProps",
  providerName: "<NativeSelectRoot />",
  strict: false
});
const {
  withProvider,
  useClassNames,
  useStyles: useNativeSelectStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "nativeSelect" });
const NativeSelectRoot = withProvider("div", "root", {
  wrapElement(element, props) {
    const field = useFieldContext();
    const disabled = Boolean(field?.disabled ?? props.disabled);
    const invalid = Boolean(field?.invalid ?? props.invalid);
    return /* @__PURE__ */ jsx(NativeSelectBasePropsProvider, { value: { disabled, invalid }, children: element });
  }
});
const NativeSelectPropsProvider = PropsProvider;
const StyledSelect = chakra(Field.Select, {}, { forwardAsChild: true });
const NativeSelectField = forwardRef(function NativeSelectField2(props, ref) {
  const { children, placeholder, ...restProps } = props;
  const { disabled, invalid } = useNativeSelectBaseProps();
  const styles = useNativeSelectStyles();
  const classNames = useClassNames();
  return /* @__PURE__ */ jsxs(
    StyledSelect,
    {
      disabled,
      "data-invalid": dataAttr(invalid),
      ...restProps,
      ref,
      className: cx(classNames.field, props.className),
      css: [styles.field, props.css],
      children: [
        placeholder && /* @__PURE__ */ jsx("option", { value: "", children: placeholder }),
        children
      ]
    }
  );
});
function NativeSelectIndicator(props) {
  const styles = useNativeSelectStyles();
  const { disabled, invalid } = useNativeSelectBaseProps();
  const classNames = useClassNames();
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ...props,
      "data-disabled": dataAttr(disabled),
      "data-invalid": dataAttr(invalid),
      className: cx(classNames.indicator, props.className),
      css: [styles.indicator, props.css],
      children: props.children ?? /* @__PURE__ */ jsx(ChevronDownIcon, {})
    }
  );
}

export { NativeSelectField, NativeSelectIndicator, NativeSelectPropsProvider, NativeSelectRoot, useNativeSelectStyles };
