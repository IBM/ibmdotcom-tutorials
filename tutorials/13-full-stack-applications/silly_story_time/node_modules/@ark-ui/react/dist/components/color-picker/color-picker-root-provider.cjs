'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const splitPresenceProps = require('../presence/split-presence-props.cjs');
const usePresence = require('../presence/use-presence.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useColorPickerContext = require('./use-color-picker-context.cjs');

const ColorPickerRootProvider = react.forwardRef((props, ref) => {
  const [presenceProps, colorPickerProps] = splitPresenceProps.splitPresenceProps(props);
  const [{ value: colorPicker }, localProps] = createSplitProps.createSplitProps()(colorPickerProps, ["value"]);
  const presence = usePresence.usePresence(react$1.mergeProps({ present: colorPicker.open }, presenceProps));
  const mergedProps = react$1.mergeProps(colorPicker.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useColorPickerContext.ColorPickerProvider, { value: colorPicker, children: /* @__PURE__ */ jsxRuntime.jsx(usePresenceContext.PresenceProvider, { value: presence, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) }) });
});
ColorPickerRootProvider.displayName = "ColorPickerRootProvider";

exports.ColorPickerRootProvider = ColorPickerRootProvider;
