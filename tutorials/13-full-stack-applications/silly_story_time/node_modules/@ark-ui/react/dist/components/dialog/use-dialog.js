'use client';
import * as dialog from '@zag-js/dialog';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

const useDialog = (props) => {
  const id = useId();
  const { getRootNode } = useEnvironmentContext();
  const { dir } = useLocaleContext();
  const machineProps = {
    id,
    getRootNode,
    dir,
    ...props
  };
  const service = useMachine(dialog.machine, machineProps);
  return dialog.connect(service, normalizeProps);
};

export { useDialog };
