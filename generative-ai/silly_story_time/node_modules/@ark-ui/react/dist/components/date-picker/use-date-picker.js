'use client';
import * as datePicker from '@zag-js/date-picker';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

const useDatePicker = (props) => {
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
  const service = useMachine(datePicker.machine, machineProps);
  return datePicker.connect(service, normalizeProps);
};

export { useDatePicker };
