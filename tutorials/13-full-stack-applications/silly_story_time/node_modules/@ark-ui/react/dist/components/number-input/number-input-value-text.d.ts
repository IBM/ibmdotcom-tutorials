import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface NumberInputValueTextBaseProps extends PolymorphicProps {
}
export interface NumberInputValueTextProps extends HTMLProps<'span'>, NumberInputValueTextBaseProps {
}
export declare const NumberInputValueText: ForwardRefExoticComponent<NumberInputValueTextProps & RefAttributes<HTMLSpanElement>>;
