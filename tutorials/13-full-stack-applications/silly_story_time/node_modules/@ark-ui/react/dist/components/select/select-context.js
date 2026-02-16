'use client';
import { useSelectContext } from './use-select-context.js';

const SelectContext = (props) => props.children(useSelectContext());

export { SelectContext };
