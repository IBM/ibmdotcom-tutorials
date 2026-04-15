'use client';
import * as listbox from '@zag-js/listbox';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

const useListbox = (props) => {
  const id = useId();
  const { dir } = useLocaleContext();
  const { getRootNode } = useEnvironmentContext();
  const machineProps = {
    id,
    dir,
    getRootNode,
    ...props
  };
  const service = useMachine(listbox.machine, machineProps);
  return listbox.connect(service, normalizeProps);
};

export { useListbox };
