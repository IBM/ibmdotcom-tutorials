'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const composeRefs = require('../../utils/compose-refs.cjs');
const factory = require('../factory.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useColorPickerContext = require('./use-color-picker-context.cjs');

const ColorPickerContent = react.forwardRef((props, ref) => {
  const colorPicker = useColorPickerContext.useColorPickerContext();
  const presence = usePresenceContext.usePresenceContext();
  const mergedProps = react$1.mergeProps(colorPicker.getContentProps(), presence.getPresenceProps(), props);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref: composeRefs.composeRefs(presence.ref, ref) });
});
ColorPickerContent.displayName = "ColorPickerContent";

exports.ColorPickerContent = ColorPickerContent;
