import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface StepsPrevTriggerBaseProps extends PolymorphicProps {
}
export interface StepsPrevTriggerProps extends HTMLProps<'button'>, StepsPrevTriggerBaseProps {
}
export declare const StepsPrevTrigger: ForwardRefExoticComponent<StepsPrevTriggerProps & RefAttributes<HTMLButtonElement>>;
