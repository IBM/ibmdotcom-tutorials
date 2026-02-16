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
const useComboboxContext = require('./use-combobox-context.cjs');

const ComboboxImpl = (props, ref) => {
  const [presenceProps, comboboxProps] = splitPresenceProps.splitPresenceProps(props);
  const [{ value: combobox }, localProps] = createSplitProps.createSplitProps()(comboboxProps, ["value"]);
  const presence = usePresence.usePresence(react$1.mergeProps({ present: combobox.open }, presenceProps));
  const mergedProps = react$1.mergeProps(combobox.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useComboboxContext.ComboboxProvider, { value: combobox, children: /* @__PURE__ */ jsxRuntime.jsx(usePresenceContext.PresenceProvider, { value: presence, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) }) });
};
const ComboboxRootProvider = react.forwardRef(ComboboxImpl);

exports.ComboboxRootProvider = ComboboxRootProvider;
