'use client';
import { useComboboxContext } from './use-combobox-context.js';

const ComboboxContext = (props) => props.children(useComboboxContext());

export { ComboboxContext };
