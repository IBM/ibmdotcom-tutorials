import { InputProps } from '@zag-js/listbox';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ListboxInputBaseProps extends InputProps, PolymorphicProps {
}
export interface ListboxInputProps extends HTMLProps<'input'>, ListboxInputBaseProps {
}
export declare const ListboxInput: ForwardRefExoticComponent<ListboxInputProps & RefAttributes<HTMLInputElement>>;
