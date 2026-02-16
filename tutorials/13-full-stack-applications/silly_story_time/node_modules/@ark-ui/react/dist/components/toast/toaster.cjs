'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const toast = require('@zag-js/toast');
const react = require('react');
const useEnvironmentContext = require('../../providers/environment/use-environment-context.cjs');
const useLocaleContext = require('../../providers/locale/use-locale-context.cjs');
const factory = require('../factory.cjs');
const useToastContext = require('./use-toast-context.cjs');

function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
  if (e) {
    for (const k in e) {
      if (k !== 'default') {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}

const toast__namespace = /*#__PURE__*/_interopNamespaceDefault(toast);

const Toaster = react.forwardRef((props, ref) => {
  const { toaster, children, ...localProps } = props;
  const locale = useLocaleContext.useLocaleContext();
  const env = useEnvironmentContext.useEnvironmentContext();
  const service = react$1.useMachine(toast__namespace.group.machine, {
    store: toaster,
    id: react.useId(),
    dir: locale?.dir,
    getRootNode: env?.getRootNode
  });
  const api = toast__namespace.group.connect(service, react$1.normalizeProps);
  const mergedProps = react$1.mergeProps(api.getGroupProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref, children: api.getToasts().map((toast2, index) => /* @__PURE__ */ jsxRuntime.jsx(ToastActor, { value: toast2, parent: service, index, children: (ctx) => children(ctx) }, toast2.id)) });
});
Toaster.displayName = "Toaster";
const ToastActor = (props) => {
  const env = useEnvironmentContext.useEnvironmentContext();
  const localProps = {
    ...props.value,
    parent: props.parent,
    index: props.index,
    getRootNode: env.getRootNode
  };
  const service = react$1.useMachine(toast__namespace.machine, { ...localProps });
  const api = toast__namespace.connect(service, react$1.normalizeProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useToastContext.ToastProvider, { value: api, children: props.children(props.value) });
};
ToastActor.displayName = "ToastActor";

exports.Toaster = Toaster;
