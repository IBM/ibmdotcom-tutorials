'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useMenuContext } from './use-menu-context.js';
import { MenuItemProvider } from './use-menu-item-context.js';
import { MenuOptionItemPropsProvider } from './use-menu-option-item-props-context.js';

const MenuCheckboxItem = forwardRef((props, ref) => {
  const [partialOptionItemProps, localProps] = createSplitProps()(props, [
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
  const menu = useMenuContext();
  const mergedProps = mergeProps(menu.getOptionItemProps(optionItemProps), localProps);
  const optionItemState = menu.getOptionItemState(optionItemProps);
  return /* @__PURE__ */ jsx(MenuOptionItemPropsProvider, { value: optionItemProps, children: /* @__PURE__ */ jsx(MenuItemProvider, { value: optionItemState, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) }) });
});
MenuCheckboxItem.displayName = "MenuCheckboxItem";

export { MenuCheckboxItem };
