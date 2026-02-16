'use client';
import { jsx } from 'react/jsx-runtime';
import { trapFocus } from '@zag-js/focus-trap';
import { forwardRef, useRef } from 'react';
import { composeRefs } from '../../utils/compose-refs.js';
import { createSplitProps } from '../../utils/create-split-props.js';
import { useSafeLayoutEffect } from '../../utils/use-safe-layout-effect.js';
import { ark } from '../factory.js';

const FocusTrap = forwardRef((props, ref) => {
  const localRef = useRef(null);
  const [trapProps, localProps] = createSplitProps()(props, [
    "disabled",
    "onActivate",
    "onDeactivate",
    "initialFocus",
    "fallbackFocus",
    "returnFocusOnDeactivate",
    "setReturnFocus"
  ]);
  useSafeLayoutEffect(() => {
    const node = localRef.current;
    if (!node || trapProps.disabled) return;
    return trapFocus(node, trapProps);
  }, [ref, trapProps]);
  return /* @__PURE__ */ jsx(ark.div, { ref: composeRefs(localRef, ref), ...localProps });
});
FocusTrap.displayName = "FocusTrap";

export { FocusTrap };
