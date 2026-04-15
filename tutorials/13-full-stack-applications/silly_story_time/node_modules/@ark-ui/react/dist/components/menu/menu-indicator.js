'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useMenuContext } from './use-menu-context.js';

const MenuIndicator = forwardRef((props, ref) => {
  const menu = useMenuContext();
  const mergedProps = mergeProps(menu.getIndicatorProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
MenuIndicator.displayName = "MenuIndicator";

export { MenuIndicator };
