'use client';
import { jsx } from 'react/jsx-runtime';
import { useMachine, normalizeProps, mergeProps } from '@zag-js/react';
import * as toast from '@zag-js/toast';
import { forwardRef, useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';
import { ark } from '../factory.js';
import { ToastProvider } from './use-toast-context.js';

const Toaster = forwardRef((props, ref) => {
  const { toaster, children, ...localProps } = props;
  const locale = useLocaleContext();
  const env = useEnvironmentContext();
  const service = useMachine(toast.group.machine, {
    store: toaster,
    id: useId(),
    dir: locale?.dir,
    getRootNode: env?.getRootNode
  });
  const api = toast.group.connect(service, normalizeProps);
  const mergedProps = mergeProps(api.getGroupProps(), localProps);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref, children: api.getToasts().map((toast2, index) => /* @__PURE__ */ jsx(ToastActor, { value: toast2, parent: service, index, children: (ctx) => children(ctx) }, toast2.id)) });
});
Toaster.displayName = "Toaster";
const ToastActor = (props) => {
  const env = useEnvironmentContext();
  const localProps = {
    ...props.value,
    parent: props.parent,
    index: props.index,
    getRootNode: env.getRootNode
  };
  const service = useMachine(toast.machine, { ...localProps });
  const api = toast.connect(service, normalizeProps);
  return /* @__PURE__ */ jsx(ToastProvider, { value: api, children: props.children(props.value) });
};
ToastActor.displayName = "ToastActor";

export { Toaster };
