'use client';
import { useMachine, normalizeProps } from '@zag-js/react';
import * as tabs from '@zag-js/tabs';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

const useTabs = (props) => {
  const id = useId();
  const { getRootNode } = useEnvironmentContext();
  const { dir } = useLocaleContext();
  const machineProps = {
    id,
    dir,
    getRootNode,
    ...props
  };
  const service = useMachine(tabs.machine, machineProps);
  return tabs.connect(service, normalizeProps);
};

export { useTabs };
