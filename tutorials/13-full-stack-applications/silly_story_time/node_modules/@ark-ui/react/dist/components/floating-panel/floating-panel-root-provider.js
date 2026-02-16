'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { splitPresenceProps } from '../presence/split-presence-props.js';
import { usePresence } from '../presence/use-presence.js';
import { PresenceProvider } from '../presence/use-presence-context.js';
import { FloatingPanelProvider } from './use-floating-panel-context.js';

const FloatingPanelRootProvider = (props) => {
  const [presenceProps, baseProps] = splitPresenceProps(props);
  const [{ value: floatingPanel }, localProps] = createSplitProps()(baseProps, ["value"]);
  const presence = usePresence(mergeProps({ present: floatingPanel.open }, presenceProps));
  return /* @__PURE__ */ jsx(FloatingPanelProvider, { value: floatingPanel, children: /* @__PURE__ */ jsx(PresenceProvider, { value: presence, children: localProps.children }) });
};

export { FloatingPanelRootProvider };
