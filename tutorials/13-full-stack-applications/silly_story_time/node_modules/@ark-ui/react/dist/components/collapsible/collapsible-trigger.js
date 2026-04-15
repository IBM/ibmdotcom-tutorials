'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useCollapsibleContext } from './use-collapsible-context.js';

const CollapsibleTrigger = forwardRef((props, ref) => {
  const collapsible = useCollapsibleContext();
  const mergedProps = mergeProps(collapsible.getTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
CollapsibleTrigger.displayName = "CollapsibleTrigger";

export { CollapsibleTrigger };
