import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface StepsNextTriggerBaseProps extends PolymorphicProps {
}
export interface StepsNextTriggerProps extends HTMLProps<'button'>, StepsNextTriggerBaseProps {
}
export declare const StepsNextTrigger: ForwardRefExoticComponent<StepsNextTriggerProps & RefAttributes<HTMLButtonElement>>;
