'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useCollapsibleContext } from './use-collapsible-context.js';

const CollapsibleIndicator = forwardRef((props, ref) => {
  const collapsible = useCollapsibleContext();
  const mergedProps = mergeProps(collapsible.getIndicatorProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
CollapsibleIndicator.displayName = "CollapsibleIndicator";

export { CollapsibleIndicator };
