'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { CollapsibleProvider } from './use-collapsible-context.js';

const CollapsibleRootProvider = forwardRef((props, ref) => {
  const [{ value: collapsible }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(collapsible.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(CollapsibleProvider, { value: collapsible, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
CollapsibleRootProvider.displayName = "CollapsibleRootProvider";

export { CollapsibleRootProvider };
