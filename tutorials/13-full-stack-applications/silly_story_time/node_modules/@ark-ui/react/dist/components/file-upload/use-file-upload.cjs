'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const fileUpload = require('@zag-js/file-upload');
const react$1 = require('@zag-js/react');
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

const fileUpload__namespace = /*#__PURE__*/_interopNamespaceDefault(fileUpload);

const useFileUpload = (props) => {
  const id = react.useId();
  const { getRootNode } = useEnvironmentContext.useEnvironmentContext();
  const { dir, locale } = useLocaleContext.useLocaleContext();
  const field = useFieldContext.useFieldContext();
  const machineProps = {
    id,
    ids: {
      label: field?.ids.label,
      hiddenInput: field?.ids.control
    },
    dir,
    disabled: field?.disabled,
    locale,
    required: field?.required,
    invalid: field?.invalid,
    getRootNode,
    ...props
  };
  const service = react$1.useMachine(fileUpload__namespace.machine, machineProps);
  return fileUpload__namespace.connect(service, react$1.normalizeProps);
};

exports.useFileUpload = useFileUpload;
