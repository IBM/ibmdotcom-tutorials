'use client';
import { useMachine, normalizeProps } from '@zag-js/react';
import * as toggle from '@zag-js/toggle';

function useToggle(props) {
  const service = useMachine(toggle.machine, props);
  return toggle.connect(service, normalizeProps);
}

export { useToggle };
