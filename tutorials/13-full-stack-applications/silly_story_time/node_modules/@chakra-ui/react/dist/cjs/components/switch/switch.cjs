"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var _switch = require('@ark-ui/react/switch');
var React = require('react');
var attr = require('../../utils/attr.cjs');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var factory = require('../../styled-system/factory.cjs');

const {
  withProvider,
  withContext,
  useStyles: useSwitchStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "switch" });
const SwitchRootProvider = withProvider(_switch.Switch.RootProvider, "root", { forwardAsChild: true });
const SwitchRoot = withProvider(
  _switch.Switch.Root,
  "root",
  { forwardAsChild: true }
);
const SwitchPropsProvider = PropsProvider;
const SwitchLabel = withContext(
  _switch.Switch.Label,
  "label",
  { forwardAsChild: true }
);
const SwitchThumb = withContext(
  _switch.Switch.Thumb,
  "thumb",
  { forwardAsChild: true }
);
const SwitchControl = withContext(
  _switch.Switch.Control,
  "control",
  {
    forwardAsChild: true,
    defaultProps: { children: /* @__PURE__ */ jsxRuntime.jsx(SwitchThumb, {}) }
  }
);
const SwitchIndicator = React.forwardRef(function SwitchIndicator2(props, ref) {
  const api = _switch.useSwitchContext();
  const styles = useSwitchStyles();
  const { fallback, children, ...rest } = props;
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.span,
    {
      ref,
      "data-checked": attr.dataAttr(api.checked),
      ...rest,
      css: [styles.indicator, props.css],
      children: api.checked ? children : fallback
    }
  );
});
const SwitchThumbIndicator = React.forwardRef(function SwitchThumbIndicator2(props, ref) {
  const api = _switch.useSwitchContext();
  const { fallback, children, ...rest } = props;
  return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.span, { ref, "data-checked": attr.dataAttr(api.checked), ...rest, children: api.checked ? children : fallback });
});
const SwitchContext = _switch.Switch.Context;
const SwitchHiddenInput = _switch.Switch.HiddenInput;

exports.SwitchContext = SwitchContext;
exports.SwitchControl = SwitchControl;
exports.SwitchHiddenInput = SwitchHiddenInput;
exports.SwitchIndicator = SwitchIndicator;
exports.SwitchLabel = SwitchLabel;
exports.SwitchPropsProvider = SwitchPropsProvider;
exports.SwitchRoot = SwitchRoot;
exports.SwitchRootProvider = SwitchRootProvider;
exports.SwitchThumb = SwitchThumb;
exports.SwitchThumbIndicator = SwitchThumbIndicator;
exports.useSwitchStyles = useSwitchStyles;
