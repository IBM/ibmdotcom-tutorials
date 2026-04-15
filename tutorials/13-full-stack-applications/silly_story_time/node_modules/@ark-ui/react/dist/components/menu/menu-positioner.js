'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useMenuContext } from './use-menu-context.js';

const MenuPositioner = forwardRef((props, ref) => {
  const menu = useMenuContext();
  const mergedProps = mergeProps(menu.getPositionerProps(), props);
  const presence = usePresenceContext();
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
MenuPositioner.displayName = "MenuPositioner";

export { MenuPositioner };
