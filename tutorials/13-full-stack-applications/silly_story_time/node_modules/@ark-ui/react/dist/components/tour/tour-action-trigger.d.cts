import { StepActionTriggerProps } from '@zag-js/tour';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TourActionTriggerBaseProps extends PolymorphicProps, StepActionTriggerProps {
}
export interface TourActionTriggerProps extends HTMLProps<'button'>, TourActionTriggerBaseProps {
}
export declare const TourActionTrigger: ForwardRefExoticComponent<TourActionTriggerProps & RefAttributes<HTMLButtonElement>>;
