import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PopoverArrowTipBaseProps extends PolymorphicProps {
}
export interface PopoverArrowTipProps extends HTMLProps<'div'>, PopoverArrowTipBaseProps {
}
export declare const PopoverArrowTip: ForwardRefExoticComponent<PopoverArrowTipProps & RefAttributes<HTMLDivElement>>;
