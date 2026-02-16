'use client';
import { useMachine, normalizeProps } from '@zag-js/react';
import * as tour from '@zag-js/tour';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

const useTour = (props) => {
  const id = useId();
  const { getRootNode } = useEnvironmentContext();
  const { dir } = useLocaleContext();
  const machineProps = {
    id,
    dir,
    getRootNode,
    ...props
  };
  const service = useMachine(tour.machine, machineProps);
  return tour.connect(service, normalizeProps);
};

export { useTour };
