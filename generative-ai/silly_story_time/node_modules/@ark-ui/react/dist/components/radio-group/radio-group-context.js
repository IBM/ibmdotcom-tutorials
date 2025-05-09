'use client';
import { useRadioGroupContext } from './use-radio-group-context.js';

const RadioGroupContext = (props) => props.children(useRadioGroupContext());

export { RadioGroupContext };
