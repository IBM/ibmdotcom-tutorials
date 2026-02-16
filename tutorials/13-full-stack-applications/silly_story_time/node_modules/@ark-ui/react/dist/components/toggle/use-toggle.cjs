'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const react = require('@zag-js/react');
const toggle = require('@zag-js/toggle');

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

const toggle__namespace = /*#__PURE__*/_interopNamespaceDefault(toggle);

function useToggle(props) {
  const service = react.useMachine(toggle__namespace.machine, props);
  return toggle__namespace.connect(service, react.normalizeProps);
}

exports.useToggle = useToggle;
