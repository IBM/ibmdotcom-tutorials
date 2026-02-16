'use client';
import { useControllableState } from '../../utils/use-controllable-state.js';
import { useEvent } from '../../utils/use-event.js';

function useCheckboxGroup(props = {}) {
  const { defaultValue, value: controlledValue, onValueChange, disabled, readOnly, name, invalid } = props;
  const interactive = !(disabled || readOnly);
  const onChangeProp = useEvent(onValueChange, { sync: true });
  const [value, setValue] = useControllableState({
    value: controlledValue,
    defaultValue: defaultValue || [],
    onChange: onChangeProp
  });
  const isChecked = (val) => {
    return value.some((v) => String(v) === String(val));
  };
  const toggleValue = (val) => {
    isChecked(val) ? removeValue(val) : addValue(val);
  };
  const addValue = (val) => {
    if (!interactive) return;
    if (isChecked(val)) return;
    setValue(value.concat(val));
  };
  const removeValue = (val) => {
    if (!interactive) return;
    setValue(value.filter((v) => String(v) !== String(val)));
  };
  const getItemProps = (props2) => {
    return {
      checked: props2.value != null ? isChecked(props2.value) : void 0,
      onCheckedChange() {
        if (props2.value != null) {
          toggleValue(props2.value);
        }
      },
      name,
      disabled,
      readOnly,
      invalid
    };
  };
  return {
    isChecked,
    value,
    name,
    disabled: !!disabled,
    readOnly: !!readOnly,
    invalid: !!invalid,
    setValue,
    addValue,
    toggleValue,
    getItemProps
  };
}

export { useCheckboxGroup };
