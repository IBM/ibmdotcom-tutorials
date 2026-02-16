import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TourCloseTriggerBaseProps extends PolymorphicProps {
}
export interface TourCloseTriggerProps extends HTMLProps<'button'>, TourCloseTriggerBaseProps {
}
export declare const TourCloseTrigger: ForwardRefExoticComponent<TourCloseTriggerProps & RefAttributes<HTMLButtonElement>>;
