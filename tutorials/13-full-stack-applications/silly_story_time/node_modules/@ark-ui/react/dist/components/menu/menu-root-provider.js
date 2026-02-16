'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { useCallback } from 'react';
import { useEffectOnce } from '../../utils/use-effect-once.js';
import { splitPresenceProps } from '../presence/split-presence-props.js';
import { usePresence } from '../presence/use-presence.js';
import { PresenceProvider } from '../presence/use-presence-context.js';
import { useMenuContext, MenuProvider } from './use-menu-context.js';
import { useMenuMachineContext, MenuMachineProvider } from './use-menu-machine-context.js';
import { MenuTriggerItemProvider } from './use-menu-trigger-item-context.js';

const MenuRootProvider = (props) => {
  const parentApi = useMenuContext();
  const parentMachine = useMenuMachineContext();
  const [presenceProps, { value: menu, children }] = splitPresenceProps(props);
  const { api, service } = menu;
  const presence = usePresence(mergeProps({ present: api.open }, presenceProps));
  useEffectOnce(() => {
    if (!parentMachine) return;
    if (!parentApi) return;
    parentApi.setChild(service);
    api.setParent(parentMachine);
  });
  const triggerItemContext = useCallback(() => parentApi?.getTriggerItemProps(api), [api, parentApi]);
  return /* @__PURE__ */ jsx(MenuTriggerItemProvider, { value: triggerItemContext, children: /* @__PURE__ */ jsx(MenuMachineProvider, { value: service, children: /* @__PURE__ */ jsx(MenuProvider, { value: api, children: /* @__PURE__ */ jsx(PresenceProvider, { value: presence, children }) }) }) });
};

export { MenuRootProvider };
