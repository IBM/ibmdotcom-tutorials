'use client';
import * as fileUpload from '@zag-js/file-upload';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';
import { useFieldContext } from '../field/use-field-context.js';

const useFileUpload = (props) => {
  const id = useId();
  const { getRootNode } = useEnvironmentContext();
  const { dir, locale } = useLocaleContext();
  const field = useFieldContext();
  const machineProps = {
    id,
    ids: {
      label: field?.ids.label,
      hiddenInput: field?.ids.control
    },
    dir,
    disabled: field?.disabled,
    locale,
    required: field?.required,
    invalid: field?.invalid,
    getRootNode,
    ...props
  };
  const service = useMachine(fileUpload.machine, machineProps);
  return fileUpload.connect(service, normalizeProps);
};

export { useFileUpload };
