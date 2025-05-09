import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SelectPositionerBaseProps extends PolymorphicProps {
}
export interface SelectPositionerProps extends HTMLProps<'div'>, SelectPositionerBaseProps {
}
export declare const SelectPositioner: ForwardRefExoticComponent<SelectPositionerProps & RefAttributes<HTMLDivElement>>;
