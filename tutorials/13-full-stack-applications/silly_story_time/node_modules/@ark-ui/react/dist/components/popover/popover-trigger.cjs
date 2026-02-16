'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const usePopoverContext = require('./use-popover-context.cjs');

const PopoverTrigger = react.forwardRef((props, ref) => {
  const popover = usePopoverContext.usePopoverContext();
  const presence = usePresenceContext.usePresenceContext();
  const mergedProps = react$1.mergeProps(
    {
      ...popover.getTriggerProps(),
      "aria-controls": presence.unmounted ? void 0 : popover.getTriggerProps()["aria-controls"]
    },
    props
  );
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
PopoverTrigger.displayName = "PopoverTrigger";

exports.PopoverTrigger = PopoverTrigger;
