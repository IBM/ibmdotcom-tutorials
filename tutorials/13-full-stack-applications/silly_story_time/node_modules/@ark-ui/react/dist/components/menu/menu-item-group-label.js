'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useMenuContext } from './use-menu-context.js';
import { useMenuItemGroupContext } from './use-menu-item-group-context.js';

const MenuItemGroupLabel = forwardRef((props, ref) => {
  const menu = useMenuContext();
  const itemGroup = useMenuItemGroupContext();
  const mergedProps = mergeProps(menu.getItemGroupLabelProps({ htmlFor: itemGroup.id }), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
MenuItemGroupLabel.displayName = "MenuItemGroupLabel";

export { MenuItemGroupLabel };
