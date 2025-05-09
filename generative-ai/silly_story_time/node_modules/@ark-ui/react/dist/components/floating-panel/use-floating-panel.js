'use client';
import * as floatingPanel from '@zag-js/floating-panel';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

const useFloatingPanel = (props = {}) => {
  const { getRootNode } = useEnvironmentContext();
  const { dir } = useLocaleContext();
  const context = {
    id: useId(),
    dir,
    getRootNode,
    ...props
  };
  const service = useMachine(floatingPanel.machine, context);
  return floatingPanel.connect(service, normalizeProps);
};

export { useFloatingPanel };
