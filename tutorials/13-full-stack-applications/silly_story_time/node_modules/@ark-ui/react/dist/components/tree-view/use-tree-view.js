'use client';
import { useMachine, normalizeProps } from '@zag-js/react';
import * as treeView from '@zag-js/tree-view';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

const useTreeView = (props) => {
  const id = useId();
  const { dir } = useLocaleContext();
  const { getRootNode } = useEnvironmentContext();
  const machineProps = {
    id,
    dir,
    getRootNode,
    ...props
  };
  const service = useMachine(treeView.machine, machineProps);
  return treeView.connect(service, normalizeProps);
};

export { useTreeView };
