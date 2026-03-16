'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useMenuTriggerItemContext = require('./use-menu-trigger-item-context.cjs');

const MenuTriggerItem = react.forwardRef((props, ref) => {
  const getTriggerItemProps = useMenuTriggerItemContext.useMenuTriggerItemContext();
  const mergedProps = react$1.mergeProps(getTriggerItemProps?.() ?? {}, props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
MenuTriggerItem.displayName = "MenuTriggerItem";

exports.MenuTriggerItem = MenuTriggerItem;
