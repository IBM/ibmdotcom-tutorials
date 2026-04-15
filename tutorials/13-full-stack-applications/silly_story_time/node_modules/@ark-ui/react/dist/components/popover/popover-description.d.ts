import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PopoverDescriptionBaseProps extends PolymorphicProps {
}
export interface PopoverDescriptionProps extends HTMLProps<'div'>, PopoverDescriptionBaseProps {
}
export declare const PopoverDescription: ForwardRefExoticComponent<PopoverDescriptionProps & RefAttributes<HTMLDivElement>>;
