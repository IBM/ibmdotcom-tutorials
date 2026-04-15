'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useMenuContext } from './use-menu-context.js';
import { MenuItemProvider } from './use-menu-item-context.js';
import { useMenuItemGroupContext } from './use-menu-item-group-context.js';
import { MenuOptionItemPropsProvider } from './use-menu-option-item-props-context.js';

const MenuRadioItem = forwardRef((props, ref) => {
  const [partialItemProps, localProps] = createSplitProps()(props, [
    "closeOnSelect",
    "disabled",
    "value",
    "valueText"
  ]);
  const menu = useMenuContext();
  const itemGroup = useMenuItemGroupContext();
  const optionItemProps = {
    ...partialItemProps,
    checked: itemGroup.value === partialItemProps.value,
    type: "radio",
    onCheckedChange: () => itemGroup.onValueChange?.({ value: partialItemProps.value })
  };
  const mergedProps = mergeProps(menu.getOptionItemProps(optionItemProps), localProps);
  const optionItemState = menu.getOptionItemState(optionItemProps);
  return /* @__PURE__ */ jsx(MenuOptionItemPropsProvider, { value: optionItemProps, children: /* @__PURE__ */ jsx(MenuItemProvider, { value: optionItemState, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) }) });
});
MenuRadioItem.displayName = "MenuRadioItem";

export { MenuRadioItem };
