import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface StepsTriggerBaseProps extends PolymorphicProps {
}
export interface StepsTriggerProps extends HTMLProps<'button'>, StepsTriggerBaseProps {
}
export declare const StepsTrigger: ForwardRefExoticComponent<StepsTriggerProps & RefAttributes<HTMLButtonElement>>;
