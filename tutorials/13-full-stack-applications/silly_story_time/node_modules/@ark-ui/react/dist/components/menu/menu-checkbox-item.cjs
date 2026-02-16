'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useMenuContext = require('./use-menu-context.cjs');
const useMenuItemContext = require('./use-menu-item-context.cjs');
const useMenuOptionItemPropsContext = require('./use-menu-option-item-props-context.cjs');

const MenuCheckboxItem = react.forwardRef((props, ref) => {
  const [partialOptionItemProps, localProps] = createSplitProps.createSplitProps()(props, [
    "checked",
    "closeOnSelect",
    "disabled",
    "onCheckedChange",
    "value",
    "valueText"
  ]);
  const optionItemProps = {
    ...partialOptionItemProps,
    type: "checkbox"
  };
  const menu = useMenuContext.useMenuContext();
  const mergedProps = react$1.mergeProps(menu.getOptionItemProps(optionItemProps), localProps);
  const optionItemState = menu.getOptionItemState(optionItemProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useMenuOptionItemPropsContext.MenuOptionItemPropsProvider, { value: optionItemProps, children: /* @__PURE__ */ jsxRuntime.jsx(useMenuItemContext.MenuItemProvider, { value: optionItemState, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) }) });
});
MenuCheckboxItem.displayName = "MenuCheckboxItem";

exports.MenuCheckboxItem = MenuCheckboxItem;
