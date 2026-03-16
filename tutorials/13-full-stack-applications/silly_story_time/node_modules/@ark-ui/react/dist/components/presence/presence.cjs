'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('react');
const composeRefs = require('../../utils/compose-refs.cjs');
const factory = require('../factory.cjs');
const splitPresenceProps = require('./split-presence-props.cjs');
const usePresence = require('./use-presence.cjs');

const Presence = react.forwardRef((props, ref) => {
  const [presenceProps, localProps] = splitPresenceProps.splitPresenceProps(props);
  const presence = usePresence.usePresence(presenceProps);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.ark.div,
    {
      ...localProps,
      ...presence.getPresenceProps(),
      "data-scope": "presence",
      "data-part": "root",
      ref: composeRefs.composeRefs(presence.ref, ref)
    }
  );
});
Presence.displayName = "Presence";

exports.Presence = Presence;
