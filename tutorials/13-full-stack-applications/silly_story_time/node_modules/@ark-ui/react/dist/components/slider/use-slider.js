'use client';
import { useMachine, normalizeProps } from '@zag-js/react';
import * as slider from '@zag-js/slider';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

const useSlider = (props) => {
  const id = useId();
  const { getRootNode } = useEnvironmentContext();
  const { dir } = useLocaleContext();
  const machineProps = {
    id,
    dir,
    getRootNode,
    ...props
  };
  const service = useMachine(slider.machine, machineProps);
  return slider.connect(service, normalizeProps);
};

export { useSlider };
