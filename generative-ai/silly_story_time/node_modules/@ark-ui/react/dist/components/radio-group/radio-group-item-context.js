'use client';
import { useRadioGroupItemContext } from './use-radio-group-item-context.js';

const RadioGroupItemContext = (props) => props.children(useRadioGroupItemContext());

export { RadioGroupItemContext };
