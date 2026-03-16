'use client';
import { useMachine, normalizeProps } from '@zag-js/react';
import * as timer from '@zag-js/timer';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';

const useTimer = (props) => {
  const id = useId();
  const { getRootNode } = useEnvironmentContext();
  const machineProps = {
    id,
    getRootNode,
    ...props
  };
  const service = useMachine(timer.machine, machineProps);
  return timer.connect(service, normalizeProps);
};

export { useTimer };
