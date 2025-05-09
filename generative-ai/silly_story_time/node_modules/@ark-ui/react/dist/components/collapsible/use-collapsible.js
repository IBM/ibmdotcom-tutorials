'use client';
import * as collapsible from '@zag-js/collapsible';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId, useRef } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

const useCollapsible = (props = {}) => {
  const { lazyMount, unmountOnExit, ...collapsibleProps } = props;
  const id = useId();
  const wasVisible = useRef(false);
  const { dir } = useLocaleContext();
  const { getRootNode } = useEnvironmentContext();
  const machineProps = {
    id,
    dir,
    getRootNode,
    ...collapsibleProps
  };
  const service = useMachine(collapsible.machine, machineProps);
  const api = collapsible.connect(service, normalizeProps);
  if (api.visible) {
    wasVisible.current = true;
  }
  const isUnmounted = !api.visible && !wasVisible.current && lazyMount || unmountOnExit && !api.visible && wasVisible.current;
  return { ...api, isUnmounted };
};

export { useCollapsible };
