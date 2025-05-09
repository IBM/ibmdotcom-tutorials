import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ListboxLabelBaseProps extends PolymorphicProps {
}
export interface ListboxLabelProps extends HTMLProps<'label'>, ListboxLabelBaseProps {
}
export declare const ListboxLabel: ForwardRefExoticComponent<ListboxLabelProps & RefAttributes<HTMLLabelElement>>;
