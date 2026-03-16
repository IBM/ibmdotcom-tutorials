'use client';
import * as editable from '@zag-js/editable';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';
import { useFieldContext } from '../field/use-field-context.js';

const useEditable = (props) => {
  const id = useId();
  const { getRootNode } = useEnvironmentContext();
  const { dir } = useLocaleContext();
  const field = useFieldContext();
  const machineProps = {
    id,
    ids: {
      label: field?.ids.label,
      input: field?.ids.control
    },
    dir,
    disabled: field?.disabled,
    invalid: field?.invalid,
    readOnly: field?.readOnly,
    required: field?.required,
    getRootNode,
    ...props
  };
  const service = useMachine(editable.machine, machineProps);
  return editable.connect(service, normalizeProps);
};

export { useEditable };
