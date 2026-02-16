'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useMenuContext = require('./use-menu-context.cjs');
const useMenuItemGroupContext = require('./use-menu-item-group-context.cjs');

const MenuItemGroupLabel = react.forwardRef((props, ref) => {
  const menu = useMenuContext.useMenuContext();
  const itemGroup = useMenuItemGroupContext.useMenuItemGroupContext();
  const mergedProps = react$1.mergeProps(menu.getItemGroupLabelProps({ htmlFor: itemGroup.id }), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
MenuItemGroupLabel.displayName = "MenuItemGroupLabel";

exports.MenuItemGroupLabel = MenuItemGroupLabel;
