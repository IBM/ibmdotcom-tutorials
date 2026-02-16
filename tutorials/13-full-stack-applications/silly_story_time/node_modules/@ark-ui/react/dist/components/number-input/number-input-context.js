'use client';
import { useNumberInputContext } from './use-number-input-context.js';

const NumberInputContext = (props) => props.children(useNumberInputContext());

export { NumberInputContext };
