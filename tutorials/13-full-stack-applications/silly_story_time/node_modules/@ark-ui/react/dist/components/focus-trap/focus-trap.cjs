'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const focusTrap = require('@zag-js/focus-trap');
const react = require('react');
const composeRefs = require('../../utils/compose-refs.cjs');
const createSplitProps = require('../../utils/create-split-props.cjs');
const useSafeLayoutEffect = require('../../utils/use-safe-layout-effect.cjs');
const factory = require('../factory.cjs');

const FocusTrap = react.forwardRef((props, ref) => {
  const localRef = react.useRef(null);
  const [trapProps, localProps] = createSplitProps.createSplitProps()(props, [
    "disabled",
    "onActivate",
    "onDeactivate",
    "initialFocus",
    "fallbackFocus",
    "returnFocusOnDeactivate",
    "setReturnFocus"
  ]);
  useSafeLayoutEffect.useSafeLayoutEffect(() => {
    const node = localRef.current;
    if (!node || trapProps.disabled) return;
    return focusTrap.trapFocus(node, trapProps);
  }, [ref, trapProps]);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ref: composeRefs.composeRefs(localRef, ref), ...localProps });
});
FocusTrap.displayName = "FocusTrap";

exports.FocusTrap = FocusTrap;
