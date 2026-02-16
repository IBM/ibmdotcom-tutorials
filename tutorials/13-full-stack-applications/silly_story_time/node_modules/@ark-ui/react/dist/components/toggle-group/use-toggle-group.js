'use client';
import { useMachine, normalizeProps } from '@zag-js/react';
import * as toggleGroup from '@zag-js/toggle-group';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

const useToggleGroup = (props) => {
  const id = useId();
  const { getRootNode } = useEnvironmentContext();
  const { dir } = useLocaleContext();
  const machineProps = {
    id,
    dir,
    getRootNode,
    ...props
  };
  const service = useMachine(toggleGroup.machine, machineProps);
  return toggleGroup.connect(service, normalizeProps);
};

export { useToggleGroup };
