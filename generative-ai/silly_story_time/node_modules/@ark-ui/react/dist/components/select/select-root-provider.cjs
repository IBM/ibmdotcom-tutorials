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
const useSelectContext = require('./use-select-context.cjs');

const SelectImpl = (props, ref) => {
  const [presenceProps, selectProps] = splitPresenceProps.splitPresenceProps(props);
  const [{ value: select }, localProps] = createSplitProps.createSplitProps()(selectProps, ["value"]);
  const presence = usePresence.usePresence(react$1.mergeProps({ present: select.open }, presenceProps));
  const mergedProps = react$1.mergeProps(select.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useSelectContext.SelectProvider, { value: select, children: /* @__PURE__ */ jsxRuntime.jsx(usePresenceContext.PresenceProvider, { value: presence, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) }) });
};
const SelectRootProvider = react.forwardRef(SelectImpl);

exports.SelectRootProvider = SelectRootProvider;
