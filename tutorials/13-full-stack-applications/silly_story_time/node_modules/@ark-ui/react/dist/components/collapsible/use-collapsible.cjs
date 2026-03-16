'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const collapsible = require('@zag-js/collapsible');
const react$1 = require('@zag-js/react');
const react = require('react');
const useEnvironmentContext = require('../../providers/environment/use-environment-context.cjs');
const useLocaleContext = require('../../providers/locale/use-locale-context.cjs');

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

const collapsible__namespace = /*#__PURE__*/_interopNamespaceDefault(collapsible);

const useCollapsible = (props = {}) => {
  const { lazyMount, unmountOnExit, ...collapsibleProps } = props;
  const id = react.useId();
  const wasVisible = react.useRef(false);
  const { dir } = useLocaleContext.useLocaleContext();
  const { getRootNode } = useEnvironmentContext.useEnvironmentContext();
  const machineProps = {
    id,
    dir,
    getRootNode,
    ...collapsibleProps
  };
  const service = react$1.useMachine(collapsible__namespace.machine, machineProps);
  const api = collapsible__namespace.connect(service, react$1.normalizeProps);
  if (api.visible) {
    wasVisible.current = true;
  }
  const isUnmounted = !api.visible && !wasVisible.current && lazyMount || unmountOnExit && !api.visible && wasVisible.current;
  return { ...api, isUnmounted };
};

exports.useCollapsible = useCollapsible;
