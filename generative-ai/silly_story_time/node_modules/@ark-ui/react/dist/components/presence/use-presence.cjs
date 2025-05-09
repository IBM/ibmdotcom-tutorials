'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const presence = require('@zag-js/presence');
const react$1 = require('@zag-js/react');
const react = require('react');
const useEvent = require('../../utils/use-event.cjs');

function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
  if (e) {
    for (const k in e) {
      if (k !== 'default') {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}

const presence__namespace = /*#__PURE__*/_interopNamespaceDefault(presence);

const usePresence = (props = {}) => {
  const { lazyMount, unmountOnExit, present, skipAnimationOnMount = false, ...rest } = props;
  const wasEverPresent = react.useRef(false);
  const machineProps = {
    ...rest,
    present,
    onExitComplete: useEvent.useEvent(props.onExitComplete)
  };
  const service = react$1.useMachine(presence__namespace.machine, machineProps);
  const api = presence__namespace.connect(service, react$1.normalizeProps);
  if (api.present) {
    wasEverPresent.current = true;
  }
  const unmounted = !api.present && !wasEverPresent.current && lazyMount || unmountOnExit && !api.present && wasEverPresent.current;
  const getPresenceProps = () => ({
    "data-state": api.skip && skipAnimationOnMount ? void 0 : present ? "open" : "closed",
    hidden: !api.present
  });
  return {
    ref: api.setNode,
    getPresenceProps,
    present: api.present,
    unmounted
  };
};

exports.usePresence = usePresence;
