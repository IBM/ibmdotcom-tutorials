'use client';
import * as numberInput from '@zag-js/number-input';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';
import { useFieldContext } from '../field/use-field-context.js';

const useNumberInput = (props) => {
  const id = useId();
  const { getRootNode } = useEnvironmentContext();
  const { dir, locale } = useLocaleContext();
  const field = useFieldContext();
  const machineProps = {
    id,
    ids: {
      label: field?.ids.label,
      input: field?.ids.control
    },
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    required: field?.required,
    invalid: field?.invalid,
    dir,
    locale,
    getRootNode,
    ...props
  };
  const service = useMachine(numberInput.machine, machineProps);
  return numberInput.connect(service, normalizeProps);
};

export { useNumberInput };
