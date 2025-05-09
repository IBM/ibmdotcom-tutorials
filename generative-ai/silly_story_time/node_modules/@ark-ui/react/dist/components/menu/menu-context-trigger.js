'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useMenuContext } from './use-menu-context.js';

const MenuContextTrigger = forwardRef((props, ref) => {
  const menu = useMenuContext();
  const mergedProps = mergeProps(menu.getContextTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
MenuContextTrigger.displayName = "MenuContextTrigger";

export { MenuContextTrigger };
