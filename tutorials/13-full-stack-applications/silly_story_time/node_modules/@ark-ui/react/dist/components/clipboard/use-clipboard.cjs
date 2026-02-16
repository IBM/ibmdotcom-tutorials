'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const clipboard = require('@zag-js/clipboard');
const react$1 = require('@zag-js/react');
const react = require('react');
const useEnvironmentContext = require('../../providers/environment/use-environment-context.cjs');

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

const clipboard__namespace = /*#__PURE__*/_interopNamespaceDefault(clipboard);

const useClipboard = (props) => {
  const id = react.useId();
  const { getRootNode } = useEnvironmentContext.useEnvironmentContext();
  const machineProps = {
    id,
    getRootNode,
    ...props
  };
  const service = react$1.useMachine(clipboard__namespace.machine, machineProps);
  return clipboard__namespace.connect(service, react$1.normalizeProps);
};

exports.useClipboard = useClipboard;
