'use client';
import { useMachine, normalizeProps } from '@zag-js/react';
import * as steps from '@zag-js/steps';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

function useSteps(props) {
  const id = useId();
  const { getRootNode } = useEnvironmentContext();
  const { dir } = useLocaleContext();
  const machineProps = {
    id,
    dir,
    getRootNode,
    ...props
  };
  const service = useMachine(steps.machine, machineProps);
  return steps.connect(service, normalizeProps);
}

export { useSteps };
