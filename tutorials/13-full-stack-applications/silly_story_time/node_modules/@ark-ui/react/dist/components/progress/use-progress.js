'use client';
import * as progress from '@zag-js/progress';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

const useProgress = (props) => {
  const id = useId();
  const { getRootNode } = useEnvironmentContext();
  const { dir, locale } = useLocaleContext();
  const machineProps = {
    id,
    dir,
    locale,
    getRootNode,
    ...props
  };
  const service = useMachine(progress.machine, machineProps);
  return progress.connect(service, normalizeProps);
};

export { useProgress };
