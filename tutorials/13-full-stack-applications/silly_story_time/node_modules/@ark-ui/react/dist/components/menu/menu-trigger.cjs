'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useMenuContext = require('./use-menu-context.cjs');

const MenuTrigger = react.forwardRef((props, ref) => {
  const menu = useMenuContext.useMenuContext();
  const presence = usePresenceContext.usePresenceContext();
  const mergedProps = react$1.mergeProps(
    {
      ...menu.getTriggerProps(),
      "aria-controls": presence.unmounted ? void 0 : menu.getTriggerProps()["aria-controls"]
    },
    props
  );
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
MenuTrigger.displayName = "MenuTrigger";

exports.MenuTrigger = MenuTrigger;
