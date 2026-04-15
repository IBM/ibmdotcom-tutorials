'use client';
import * as presence from '@zag-js/presence';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useRef } from 'react';
import { useEvent } from '../../utils/use-event.js';

const usePresence = (props = {}) => {
  const { lazyMount, unmountOnExit, present, skipAnimationOnMount = false, ...rest } = props;
  const wasEverPresent = useRef(false);
  const machineProps = {
    ...rest,
    present,
    onExitComplete: useEvent(props.onExitComplete)
  };
  const service = useMachine(presence.machine, machineProps);
  const api = presence.connect(service, normalizeProps);
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

export { usePresence };
