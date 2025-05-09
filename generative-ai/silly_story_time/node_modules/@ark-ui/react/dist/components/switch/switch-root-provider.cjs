'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useSwitchContext = require('./use-switch-context.cjs');

const SwitchRootProvider = react.forwardRef((props, ref) => {
  const [{ value: api }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(api.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useSwitchContext.SwitchProvider, { value: api, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.label, { ...mergedProps, ref }) });
});
SwitchRootProvider.displayName = "SwitchRootProvider";

exports.SwitchRootProvider = SwitchRootProvider;
