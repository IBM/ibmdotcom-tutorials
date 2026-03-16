'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useMenuContext = require('./use-menu-context.cjs');
const useMenuItemGroupContext = require('./use-menu-item-group-context.cjs');

const MenuItemGroup = react.forwardRef((props, ref) => {
  const [optionalItemGroupProps, localProps] = createSplitProps.createSplitProps()(props, ["id"]);
  const menu = useMenuContext.useMenuContext();
  const id = react.useId();
  const itemGroupProps = { id, ...optionalItemGroupProps };
  const mergedProps = react$1.mergeProps(menu.getItemGroupProps(itemGroupProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useMenuItemGroupContext.MenuItemGroupProvider, { value: itemGroupProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
MenuItemGroup.displayName = "MenuItemGroup";

exports.MenuItemGroup = MenuItemGroup;
