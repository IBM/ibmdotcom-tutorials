'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const react$1 = require('@zag-js/react');
const timer = require('@zag-js/timer');
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

const timer__namespace = /*#__PURE__*/_interopNamespaceDefault(timer);

const useTimer = (props) => {
  const id = react.useId();
  const { getRootNode } = useEnvironmentContext.useEnvironmentContext();
  const machineProps = {
    id,
    getRootNode,
    ...props
  };
  const service = react$1.useMachine(timer__namespace.machine, machineProps);
  return timer__namespace.connect(service, react$1.normalizeProps);
};

exports.useTimer = useTimer;
