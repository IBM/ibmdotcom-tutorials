'use client';
import { useMachine, normalizeProps } from '@zag-js/react';
import * as splitter from '@zag-js/splitter';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

const useSplitter = (props) => {
  const id = useId();
  const { getRootNode } = useEnvironmentContext();
  const { dir } = useLocaleContext();
  const machineProps = {
    id,
    dir,
    getRootNode,
    ...props
  };
  const service = useMachine(splitter.machine, machineProps);
  return splitter.connect(service, normalizeProps);
};

export { useSplitter };
