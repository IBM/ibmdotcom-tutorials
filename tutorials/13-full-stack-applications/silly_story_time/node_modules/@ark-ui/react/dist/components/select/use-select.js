'use client';
import { useMachine, normalizeProps } from '@zag-js/react';
import * as select from '@zag-js/select';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';
import { useFieldContext } from '../field/use-field-context.js';

const useSelect = (props) => {
  const id = useId();
  const { dir } = useLocaleContext();
  const { getRootNode } = useEnvironmentContext();
  const field = useFieldContext();
  const machineProps = {
    id,
    ids: {
      label: field?.ids.label,
      hiddenSelect: field?.ids.control
    },
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    invalid: field?.invalid,
    required: field?.required,
    dir,
    getRootNode,
    ...props
  };
  const service = useMachine(select.machine, machineProps);
  return select.connect(service, normalizeProps);
};

export { useSelect };
