'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const usePinInputContext = require('./use-pin-input-context.cjs');

const PinInputControl = react.forwardRef((props, ref) => {
  const pinInput = usePinInputContext.usePinInputContext();
  const mergedProps = react$1.mergeProps(pinInput.getControlProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
PinInputControl.displayName = "PinInputControl";

exports.PinInputControl = PinInputControl;
