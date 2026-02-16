'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('@zag-js/react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const splitPresenceProps = require('../presence/split-presence-props.cjs');
const usePresence = require('../presence/use-presence.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useFloatingPanelContext = require('./use-floating-panel-context.cjs');

const FloatingPanelRootProvider = (props) => {
  const [presenceProps, baseProps] = splitPresenceProps.splitPresenceProps(props);
  const [{ value: floatingPanel }, localProps] = createSplitProps.createSplitProps()(baseProps, ["value"]);
  const presence = usePresence.usePresence(react.mergeProps({ present: floatingPanel.open }, presenceProps));
  return /* @__PURE__ */ jsxRuntime.jsx(useFloatingPanelContext.FloatingPanelProvider, { value: floatingPanel, children: /* @__PURE__ */ jsxRuntime.jsx(usePresenceContext.PresenceProvider, { value: presence, children: localProps.children }) });
};

exports.FloatingPanelRootProvider = FloatingPanelRootProvider;
