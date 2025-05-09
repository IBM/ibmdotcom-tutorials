'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef, useId } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useMenuContext } from './use-menu-context.js';
import { MenuItemGroupProvider } from './use-menu-item-group-context.js';

const MenuItemGroup = forwardRef((props, ref) => {
  const [optionalItemGroupProps, localProps] = createSplitProps()(props, ["id"]);
  const menu = useMenuContext();
  const id = useId();
  const itemGroupProps = { id, ...optionalItemGroupProps };
  const mergedProps = mergeProps(menu.getItemGroupProps(itemGroupProps), localProps);
  return /* @__PURE__ */ jsx(MenuItemGroupProvider, { value: itemGroupProps, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
MenuItemGroup.displayName = "MenuItemGroup";

export { MenuItemGroup };
