'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const react$1 = require('@zag-js/react');
const tagsInput = require('@zag-js/tags-input');
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

const tagsInput__namespace = /*#__PURE__*/_interopNamespaceDefault(tagsInput);

const useTagsInput = (props) => {
  const id = react.useId();
  const { getRootNode } = useEnvironmentContext.useEnvironmentContext();
  const { dir } = useLocaleContext.useLocaleContext();
  const field = useFieldContext.useFieldContext();
  const machineProps = {
    id,
    ids: {
      label: field?.ids.label,
      hiddenInput: field?.ids.control
    },
    dir,
    disabled: field?.disabled,
    invalid: field?.invalid,
    readOnly: field?.readOnly,
    required: field?.required,
    getRootNode,
    ...props
  };
  const service = react$1.useMachine(tagsInput__namespace.machine, machineProps);
  return tagsInput__namespace.connect(service, react$1.normalizeProps);
};

exports.useTagsInput = useTagsInput;
