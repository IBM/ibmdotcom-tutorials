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
const useMenuItemGroupContext = require('./use-menu-item-group-context.cjs');
const useMenuOptionItemPropsContext = require('./use-menu-option-item-props-context.cjs');

const MenuRadioItem = react.forwardRef((props, ref) => {
  const [partialItemProps, localProps] = createSplitProps.createSplitProps()(props, [
    "closeOnSelect",
    "disabled",
    "value",
    "valueText"
  ]);
  const menu = useMenuContext.useMenuContext();
  const itemGroup = useMenuItemGroupContext.useMenuItemGroupContext();
  const optionItemProps = {
    ...partialItemProps,
    checked: itemGroup.value === partialItemProps.value,
    type: "radio",
    onCheckedChange: () => itemGroup.onValueChange?.({ value: partialItemProps.value })
  };
  const mergedProps = react$1.mergeProps(menu.getOptionItemProps(optionItemProps), localProps);
  const optionItemState = menu.getOptionItemState(optionItemProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useMenuOptionItemPropsContext.MenuOptionItemPropsProvider, { value: optionItemProps, children: /* @__PURE__ */ jsxRuntime.jsx(useMenuItemContext.MenuItemProvider, { value: optionItemState, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) }) });
});
MenuRadioItem.displayName = "MenuRadioItem";

exports.MenuRadioItem = MenuRadioItem;
