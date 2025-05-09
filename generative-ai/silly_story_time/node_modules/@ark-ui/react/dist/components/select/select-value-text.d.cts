import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SelectValueTextBaseProps extends PolymorphicProps {
    /**
     * Text to display when no value is selected.
     */
    placeholder?: string;
}
export interface SelectValueTextProps extends HTMLProps<'span'>, SelectValueTextBaseProps {
}
export declare const SelectValueText: ForwardRefExoticComponent<SelectValueTextProps & RefAttributes<HTMLSpanElement>>;
