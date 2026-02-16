import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PopoverIndicatorBaseProps extends PolymorphicProps {
}
export interface PopoverIndicatorProps extends HTMLProps<'div'>, PopoverIndicatorBaseProps {
}
export declare const PopoverIndicator: ForwardRefExoticComponent<PopoverIndicatorProps & RefAttributes<HTMLDivElement>>;
