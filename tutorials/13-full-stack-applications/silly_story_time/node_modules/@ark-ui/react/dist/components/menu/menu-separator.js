'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useMenuContext } from './use-menu-context.js';

const MenuSeparator = forwardRef((props, ref) => {
  const menu = useMenuContext();
  const mergedProps = mergeProps(menu.getSeparatorProps(), props);
  return /* @__PURE__ */ jsx(ark.hr, { ...mergedProps, ref });
});
MenuSeparator.displayName = "MenuSeparator";

export { MenuSeparator };
