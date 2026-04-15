"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { Switch, useSwitchContext } from '@ark-ui/react/switch';
import { forwardRef } from 'react';
import { dataAttr } from '../../utils/attr.js';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { chakra } from '../../styled-system/factory.js';

const {
  withProvider,
  withContext,
  useStyles: useSwitchStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "switch" });
const SwitchRootProvider = withProvider(Switch.RootProvider, "root", { forwardAsChild: true });
const SwitchRoot = withProvider(
  Switch.Root,
  "root",
  { forwardAsChild: true }
);
const SwitchPropsProvider = PropsProvider;
const SwitchLabel = withContext(
  Switch.Label,
  "label",
  { forwardAsChild: true }
);
const SwitchThumb = withContext(
  Switch.Thumb,
  "thumb",
  { forwardAsChild: true }
);
const SwitchControl = withContext(
  Switch.Control,
  "control",
  {
    forwardAsChild: true,
    defaultProps: { children: /* @__PURE__ */ jsx(SwitchThumb, {}) }
  }
);
const SwitchIndicator = forwardRef(function SwitchIndicator2(props, ref) {
  const api = useSwitchContext();
  const styles = useSwitchStyles();
  const { fallback, children, ...rest } = props;
  return /* @__PURE__ */ jsx(
    chakra.span,
    {
      ref,
      "data-checked": dataAttr(api.checked),
      ...rest,
      css: [styles.indicator, props.css],
      children: api.checked ? children : fallback
    }
  );
});
const SwitchThumbIndicator = forwardRef(function SwitchThumbIndicator2(props, ref) {
  const api = useSwitchContext();
  const { fallback, children, ...rest } = props;
  return /* @__PURE__ */ jsx(chakra.span, { ref, "data-checked": dataAttr(api.checked), ...rest, children: api.checked ? children : fallback });
});
const SwitchContext = Switch.Context;
const SwitchHiddenInput = Switch.HiddenInput;

export { SwitchContext, SwitchControl, SwitchHiddenInput, SwitchIndicator, SwitchLabel, SwitchPropsProvider, SwitchRoot, SwitchRootProvider, SwitchThumb, SwitchThumbIndicator, useSwitchStyles };
