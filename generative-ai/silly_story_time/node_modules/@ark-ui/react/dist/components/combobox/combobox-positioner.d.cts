import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ComboboxPositionerBaseProps extends PolymorphicProps {
}
export interface ComboboxPositionerProps extends HTMLProps<'div'>, ComboboxPositionerBaseProps {
}
export declare const ComboboxPositioner: ForwardRefExoticComponent<ComboboxPositionerProps & RefAttributes<HTMLDivElement>>;
