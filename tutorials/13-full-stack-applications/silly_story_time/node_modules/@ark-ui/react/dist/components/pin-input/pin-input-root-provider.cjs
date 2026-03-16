'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const usePinInputContext = require('./use-pin-input-context.cjs');

const PinInputRootProvider = react.forwardRef((props, ref) => {
  const [{ value: pinInput }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(pinInput.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(usePinInputContext.PinInputProvider, { value: pinInput, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
PinInputRootProvider.displayName = "PinInputRootProvider";

exports.PinInputRootProvider = PinInputRootProvider;
