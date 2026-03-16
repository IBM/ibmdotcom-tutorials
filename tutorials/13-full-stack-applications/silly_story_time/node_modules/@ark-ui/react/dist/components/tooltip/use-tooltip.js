'use client';
import { useMachine, normalizeProps } from '@zag-js/react';
import * as tooltip from '@zag-js/tooltip';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

const useTooltip = (props) => {
  const id = useId();
  const { getRootNode } = useEnvironmentContext();
  const { dir } = useLocaleContext();
  const machineProps = {
    id,
    dir,
    getRootNode,
    ...props
  };
  const service = useMachine(tooltip.machine, machineProps);
  return tooltip.connect(service, normalizeProps);
};

export { useTooltip };
