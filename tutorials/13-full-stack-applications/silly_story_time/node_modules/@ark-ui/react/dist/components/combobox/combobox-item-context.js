'use client';
import { useComboboxItemContext } from './use-combobox-item-context.js';

const ComboboxItemContext = (props) => props.children(useComboboxItemContext());

export { ComboboxItemContext };
