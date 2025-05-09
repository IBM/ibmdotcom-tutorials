'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { splitCollapsibleProps } from './split-collapsible-props.js';
import { useCollapsible } from './use-collapsible.js';
import { CollapsibleProvider } from './use-collapsible-context.js';

const CollapsibleRoot = forwardRef((props, ref) => {
  const [useCollapsibleProps, localProps] = splitCollapsibleProps(props);
  const collapsible = useCollapsible(useCollapsibleProps);
  const mergedProps = mergeProps(collapsible.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(CollapsibleProvider, { value: collapsible, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
CollapsibleRoot.displayName = "CollapsibleRoot";

export { CollapsibleRoot };
