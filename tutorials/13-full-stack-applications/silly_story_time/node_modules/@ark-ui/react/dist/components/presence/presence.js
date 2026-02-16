import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { composeRefs } from '../../utils/compose-refs.js';
import { ark } from '../factory.js';
import { splitPresenceProps } from './split-presence-props.js';
import { usePresence } from './use-presence.js';

const Presence = forwardRef((props, ref) => {
  const [presenceProps, localProps] = splitPresenceProps(props);
  const presence = usePresence(presenceProps);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    ark.div,
    {
      ...localProps,
      ...presence.getPresenceProps(),
      "data-scope": "presence",
      "data-part": "root",
      ref: composeRefs(presence.ref, ref)
    }
  );
});
Presence.displayName = "Presence";

export { Presence };
