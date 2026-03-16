'use client';
import * as clipboard from '@zag-js/clipboard';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';

const useClipboard = (props) => {
  const id = useId();
  const { getRootNode } = useEnvironmentContext();
  const machineProps = {
    id,
    getRootNode,
    ...props
  };
  const service = useMachine(clipboard.machine, machineProps);
  return clipboard.connect(service, normalizeProps);
};

export { useClipboard };
