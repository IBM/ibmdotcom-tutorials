'use client';
import { useSelectItemContext } from './use-select-item-context.js';

const SelectItemContext = (props) => props.children(useSelectItemContext());

export { SelectItemContext };
