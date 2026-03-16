import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PopoverAnchorBaseProps extends PolymorphicProps {
}
export interface PopoverAnchorProps extends HTMLProps<'div'>, PopoverAnchorBaseProps {
}
export declare const PopoverAnchor: ForwardRefExoticComponent<PopoverAnchorProps & RefAttributes<HTMLDivElement>>;
