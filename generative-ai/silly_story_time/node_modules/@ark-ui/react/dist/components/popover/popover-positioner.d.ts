import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PopoverPositionerBaseProps extends PolymorphicProps {
}
export interface PopoverPositionerProps extends HTMLProps<'div'>, PopoverPositionerBaseProps {
}
export declare const PopoverPositioner: ForwardRefExoticComponent<PopoverPositionerProps & RefAttributes<HTMLDivElement>>;
