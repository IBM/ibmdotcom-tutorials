'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { splitPresenceProps } from '../presence/split-presence-props.js';
import { usePresence } from '../presence/use-presence.js';
import { PresenceProvider } from '../presence/use-presence-context.js';
import { ComboboxProvider } from './use-combobox-context.js';

const ComboboxImpl = (props, ref) => {
  const [presenceProps, comboboxProps] = splitPresenceProps(props);
  const [{ value: combobox }, localProps] = createSplitProps()(comboboxProps, ["value"]);
  const presence = usePresence(mergeProps({ present: combobox.open }, presenceProps));
  const mergedProps = mergeProps(combobox.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(ComboboxProvider, { value: combobox, children: /* @__PURE__ */ jsx(PresenceProvider, { value: presence, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) }) });
};
const ComboboxRootProvider = forwardRef(ComboboxImpl);

export { ComboboxRootProvider };
