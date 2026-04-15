import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface NumberInputControlBaseProps extends PolymorphicProps {
}
export interface NumberInputControlProps extends HTMLProps<'div'>, NumberInputControlBaseProps {
}
export declare const NumberInputControl: ForwardRefExoticComponent<NumberInputControlProps & RefAttributes<HTMLDivElement>>;
