'use client';
import { useCheckboxContext } from './use-checkbox-context.js';

const CheckboxContext = (props) => props.children(useCheckboxContext());

export { CheckboxContext };
