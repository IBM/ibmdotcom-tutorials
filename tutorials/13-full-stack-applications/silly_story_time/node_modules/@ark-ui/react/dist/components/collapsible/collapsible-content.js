'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useCollapsibleContext } from './use-collapsible-context.js';

const CollapsibleContent = forwardRef((props, ref) => {
  const collapsible = useCollapsibleContext();
  if (collapsible.isUnmounted) {
    return null;
  }
  const mergedProps = mergeProps(collapsible.getContentProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
CollapsibleContent.displayName = "CollapsibleContent";

export { CollapsibleContent };
