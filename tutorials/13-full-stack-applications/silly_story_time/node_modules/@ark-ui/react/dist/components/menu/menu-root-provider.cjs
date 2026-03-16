'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('@zag-js/react');
const react$1 = require('react');
const useEffectOnce = require('../../utils/use-effect-once.cjs');
const splitPresenceProps = require('../presence/split-presence-props.cjs');
const usePresence = require('../presence/use-presence.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useMenuContext = require('./use-menu-context.cjs');
const useMenuMachineContext = require('./use-menu-machine-context.cjs');
const useMenuTriggerItemContext = require('./use-menu-trigger-item-context.cjs');

const MenuRootProvider = (props) => {
  const parentApi = useMenuContext.useMenuContext();
  const parentMachine = useMenuMachineContext.useMenuMachineContext();
  const [presenceProps, { value: menu, children }] = splitPresenceProps.splitPresenceProps(props);
  const { api, service } = menu;
  const presence = usePresence.usePresence(react.mergeProps({ present: api.open }, presenceProps));
  useEffectOnce.useEffectOnce(() => {
    if (!parentMachine) return;
    if (!parentApi) return;
    parentApi.setChild(service);
    api.setParent(parentMachine);
  });
  const triggerItemContext = react$1.useCallback(() => parentApi?.getTriggerItemProps(api), [api, parentApi]);
  return /* @__PURE__ */ jsxRuntime.jsx(useMenuTriggerItemContext.MenuTriggerItemProvider, { value: triggerItemContext, children: /* @__PURE__ */ jsxRuntime.jsx(useMenuMachineContext.MenuMachineProvider, { value: service, children: /* @__PURE__ */ jsxRuntime.jsx(useMenuContext.MenuProvider, { value: api, children: /* @__PURE__ */ jsxRuntime.jsx(usePresenceContext.PresenceProvider, { value: presence, children }) }) }) });
};

exports.MenuRootProvider = MenuRootProvider;
