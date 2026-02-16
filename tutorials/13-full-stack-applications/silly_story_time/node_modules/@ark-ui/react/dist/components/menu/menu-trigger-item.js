'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useMenuTriggerItemContext } from './use-menu-trigger-item-context.js';

const MenuTriggerItem = forwardRef((props, ref) => {
  const getTriggerItemProps = useMenuTriggerItemContext();
  const mergedProps = mergeProps(getTriggerItemProps?.() ?? {}, props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
MenuTriggerItem.displayName = "MenuTriggerItem";

export { MenuTriggerItem };
