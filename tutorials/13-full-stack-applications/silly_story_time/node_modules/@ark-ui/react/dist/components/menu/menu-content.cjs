'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const composeRefs = require('../../utils/compose-refs.cjs');
const factory = require('../factory.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useMenuContext = require('./use-menu-context.cjs');

const MenuContent = react.forwardRef((props, ref) => {
  const menu = useMenuContext.useMenuContext();
  const presence = usePresenceContext.usePresenceContext();
  const mergedProps = react$1.mergeProps(menu.getContentProps(), presence.getPresenceProps(), props);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref: composeRefs.composeRefs(presence.ref, ref) });
});
MenuContent.displayName = "MenuContent";

exports.MenuContent = MenuContent;
