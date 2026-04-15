'use client';
import * as combobox from '@zag-js/combobox';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';
import { useFieldContext } from '../field/use-field-context.js';

const useCombobox = (props) => {
  const id = useId();
  const { dir } = useLocaleContext();
  const { getRootNode } = useEnvironmentContext();
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
    getRootNode,
    ...props
  };
  const service = useMachine(combobox.machine, machineProps);
  return combobox.connect(service, normalizeProps);
};

export { useCombobox };
