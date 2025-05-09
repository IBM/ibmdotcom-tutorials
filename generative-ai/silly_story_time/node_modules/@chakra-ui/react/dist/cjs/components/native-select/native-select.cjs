"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var field = require('@ark-ui/react/field');
var React = require('react');
var createContext = require('../../create-context.cjs');
var attr = require('../../utils/attr.cjs');
var cx = require('../../utils/cx.cjs');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var factory = require('../../styled-system/factory.cjs');
var icons = require('../icons.cjs');

const [NativeSelectBasePropsProvider, useNativeSelectBaseProps] = createContext.createContext({
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
} = createSlotRecipeContext.createSlotRecipeContext({ key: "nativeSelect" });
const NativeSelectRoot = withProvider("div", "root", {
  wrapElement(element, props) {
    const field$1 = field.useFieldContext();
    const disabled = Boolean(field$1?.disabled ?? props.disabled);
    const invalid = Boolean(field$1?.invalid ?? props.invalid);
    return /* @__PURE__ */ jsxRuntime.jsx(NativeSelectBasePropsProvider, { value: { disabled, invalid }, children: element });
  }
});
const NativeSelectPropsProvider = PropsProvider;
const StyledSelect = factory.chakra(field.Field.Select, {}, { forwardAsChild: true });
const NativeSelectField = React.forwardRef(function NativeSelectField2(props, ref) {
  const { children, placeholder, ...restProps } = props;
  const { disabled, invalid } = useNativeSelectBaseProps();
  const styles = useNativeSelectStyles();
  const classNames = useClassNames();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    StyledSelect,
    {
      disabled,
      "data-invalid": attr.dataAttr(invalid),
      ...restProps,
      ref,
      className: cx.cx(classNames.field, props.className),
      css: [styles.field, props.css],
      children: [
        placeholder && /* @__PURE__ */ jsxRuntime.jsx("option", { value: "", children: placeholder }),
        children
      ]
    }
  );
});
function NativeSelectIndicator(props) {
  const styles = useNativeSelectStyles();
  const { disabled, invalid } = useNativeSelectBaseProps();
  const classNames = useClassNames();
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.div,
    {
      ...props,
      "data-disabled": attr.dataAttr(disabled),
      "data-invalid": attr.dataAttr(invalid),
      className: cx.cx(classNames.indicator, props.className),
      css: [styles.indicator, props.css],
      children: props.children ?? /* @__PURE__ */ jsxRuntime.jsx(icons.ChevronDownIcon, {})
    }
  );
}

exports.NativeSelectField = NativeSelectField;
exports.NativeSelectIndicator = NativeSelectIndicator;
exports.NativeSelectPropsProvider = NativeSelectPropsProvider;
exports.NativeSelectRoot = NativeSelectRoot;
exports.useNativeSelectStyles = useNativeSelectStyles;
