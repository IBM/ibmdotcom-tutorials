'use client';
import { useState, useCallback } from 'react';

function useControllableState(props) {
  const { value, onChange, defaultValue } = props;
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const controlled = value !== void 0;
  const currentValue = controlled ? value : uncontrolledValue;
  const setValue = useCallback(
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

export { useControllableState };
