'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('@zag-js/react');
const renderStrategy = require('../../utils/render-strategy.cjs');
const splitPresenceProps = require('../presence/split-presence-props.cjs');
const usePresence = require('../presence/use-presence.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useDialogContext = require('./use-dialog-context.cjs');

const DialogRootProvider = (props) => {
  const [presenceProps, { value: dialog, children }] = splitPresenceProps.splitPresenceProps(props);
  const [renderStrategyProps] = renderStrategy.splitRenderStrategyProps(presenceProps);
  const presence = usePresence.usePresence(react.mergeProps({ present: dialog.open }, presenceProps));
  return /* @__PURE__ */ jsxRuntime.jsx(useDialogContext.DialogProvider, { value: dialog, children: /* @__PURE__ */ jsxRuntime.jsx(renderStrategy.RenderStrategyPropsProvider, { value: renderStrategyProps, children: /* @__PURE__ */ jsxRuntime.jsx(usePresenceContext.PresenceProvider, { value: presence, children }) }) });
};

exports.DialogRootProvider = DialogRootProvider;
