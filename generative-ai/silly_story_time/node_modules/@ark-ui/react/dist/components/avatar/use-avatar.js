'use client';
import * as avatar from '@zag-js/avatar';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

const useAvatar = (props) => {
  const id = useId();
  const { getRootNode } = useEnvironmentContext();
  const { dir } = useLocaleContext();
  const context = {
    id,
    dir,
    getRootNode,
    ...props
  };
  const service = useMachine(avatar.machine, context);
  return avatar.connect(service, normalizeProps);
};

export { useAvatar };
