'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { splitPresenceProps } from '../presence/split-presence-props.js';
import { usePresence } from '../presence/use-presence.js';
import { PresenceProvider } from '../presence/use-presence-context.js';
import { SelectProvider } from './use-select-context.js';

const SelectImpl = (props, ref) => {
  const [presenceProps, selectProps] = splitPresenceProps(props);
  const [{ value: select }, localProps] = createSplitProps()(selectProps, ["value"]);
  const presence = usePresence(mergeProps({ present: select.open }, presenceProps));
  const mergedProps = mergeProps(select.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(SelectProvider, { value: select, children: /* @__PURE__ */ jsx(PresenceProvider, { value: presence, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) }) });
};
const SelectRootProvider = forwardRef(SelectImpl);

export { SelectRootProvider };
