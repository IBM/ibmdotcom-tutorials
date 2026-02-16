'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useMenuContext } from './use-menu-context.js';

const MenuTrigger = forwardRef((props, ref) => {
  const menu = useMenuContext();
  const presence = usePresenceContext();
  const mergedProps = mergeProps(
    {
      ...menu.getTriggerProps(),
      "aria-controls": presence.unmounted ? void 0 : menu.getTriggerProps()["aria-controls"]
    },
    props
  );
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
MenuTrigger.displayName = "MenuTrigger";

export { MenuTrigger };
