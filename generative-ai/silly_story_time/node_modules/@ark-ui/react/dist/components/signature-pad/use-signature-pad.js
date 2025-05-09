'use client';
import { useMachine, normalizeProps } from '@zag-js/react';
import * as signaturePad from '@zag-js/signature-pad';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';
import { useFieldContext } from '../field/use-field-context.js';

const useSignaturePad = (props) => {
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
    dir,
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    required: field?.required,
    getRootNode,
    ...props
  };
  const service = useMachine(signaturePad.machine, machineProps);
  return signaturePad.connect(service, normalizeProps);
};

export { useSignaturePad };
