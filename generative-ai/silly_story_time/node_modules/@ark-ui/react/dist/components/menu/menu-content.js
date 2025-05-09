'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { composeRefs } from '../../utils/compose-refs.js';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useMenuContext } from './use-menu-context.js';

const MenuContent = forwardRef((props, ref) => {
  const menu = useMenuContext();
  const presence = usePresenceContext();
  const mergedProps = mergeProps(menu.getContentProps(), presence.getPresenceProps(), props);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref: composeRefs(presence.ref, ref) });
});
MenuContent.displayName = "MenuContent";

export { MenuContent };
