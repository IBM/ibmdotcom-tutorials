'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const react$1 = require('@zag-js/react');
const select = require('@zag-js/select');
const react = require('react');
const useEnvironmentContext = require('../../providers/environment/use-environment-context.cjs');
const useLocaleContext = require('../../providers/locale/use-locale-context.cjs');
const useFieldContext = require('../field/use-field-context.cjs');

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

const select__namespace = /*#__PURE__*/_interopNamespaceDefault(select);

const useSelect = (props) => {
  const id = react.useId();
  const { dir } = useLocaleContext.useLocaleContext();
  const { getRootNode } = useEnvironmentContext.useEnvironmentContext();
  const field = useFieldContext.useFieldContext();
  const machineProps = {
    id,
    ids: {
      label: field?.ids.label,
      hiddenSelect: field?.ids.control
    },
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    invalid: field?.invalid,
    required: field?.required,
    dir,
    getRootNode,
    ...props
  };
  const service = react$1.useMachine(select__namespace.machine, machineProps);
  return select__namespace.connect(service, react$1.normalizeProps);
};

exports.useSelect = useSelect;
