'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const checkbox = require('@zag-js/checkbox');
const react$1 = require('@zag-js/react');
const react = require('react');
const useEnvironmentContext = require('../../providers/environment/use-environment-context.cjs');
const useLocaleContext = require('../../providers/locale/use-locale-context.cjs');
const useFieldContext = require('../field/use-field-context.cjs');
const useCheckboxGroupContext = require('./use-checkbox-group-context.cjs');

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

const checkbox__namespace = /*#__PURE__*/_interopNamespaceDefault(checkbox);

const useCheckbox = (ownProps = {}) => {
  const checkboxGroup = useCheckboxGroupContext.useCheckboxGroupContext();
  const field = useFieldContext.useFieldContext();
  const props = react.useMemo(() => {
    return react$1.mergeProps(ownProps, checkboxGroup?.getItemProps({ value: ownProps.value }) ?? {});
  }, [ownProps, checkboxGroup]);
  const id = react.useId();
  const { getRootNode } = useEnvironmentContext.useEnvironmentContext();
  const { dir } = useLocaleContext.useLocaleContext();
  const machineProps = {
    id,
    ids: {
      label: field?.ids.label,
      hiddenInput: field?.ids.control
    },
    dir,
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    invalid: field?.invalid,
    required: field?.required,
    getRootNode,
    ...props
  };
  const service = react$1.useMachine(checkbox__namespace.machine, machineProps);
  return checkbox__namespace.connect(service, react$1.normalizeProps);
};

exports.useCheckbox = useCheckbox;
