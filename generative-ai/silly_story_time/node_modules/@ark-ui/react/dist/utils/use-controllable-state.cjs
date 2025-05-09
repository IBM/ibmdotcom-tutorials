'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const react = require('react');

function useControllableState(props) {
  const { value, onChange, defaultValue } = props;
  const [uncontrolledValue, setUncontrolledValue] = react.useState(defaultValue);
  const controlled = value !== void 0;
  const currentValue = controlled ? value : uncontrolledValue;
  const setValue = react.useCallback(
    (value2) => {
      if (controlled) {
        return onChange?.(value2);
      }
      setUncontrolledValue(value2);
      return onChange?.(value2);
    },
    [controlled, onChange]
  );
  return [currentValue, setValue];
}

exports.useControllableState = useControllableState;
