'use client';
import * as pinInput from '@zag-js/pin-input';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';
import { useFieldContext } from '../field/use-field-context.js';

const usePinInput = (props) => {
  const id = useId();
  const { getRootNode } = useEnvironmentContext();
  const { dir } = useLocaleContext();
  const field = useFieldContext();
  const machineProps = {
    id,
    ids: {
      label: field?.ids.label,
      hiddenInput: field?.ids.control
    },
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    required: field?.required,
    invalid: field?.invalid,
    dir,
    getRootNode,
    ...props
  };
  const service = useMachine(pinInput.machine, machineProps);
  return pinInput.connect(service, normalizeProps);
};

export { usePinInput };
