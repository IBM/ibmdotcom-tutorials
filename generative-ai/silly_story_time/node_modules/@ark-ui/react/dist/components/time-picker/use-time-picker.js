'use client';
import { useMachine, normalizeProps } from '@zag-js/react';
import * as timePicker from '@zag-js/time-picker';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

const useTimePicker = (props) => {
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
  const service = useMachine(timePicker.machine, machineProps);
  return timePicker.connect(service, normalizeProps);
};

export { useTimePicker };
