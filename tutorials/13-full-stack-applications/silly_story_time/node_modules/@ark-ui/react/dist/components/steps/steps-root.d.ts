import { HTMLProps, PolymorphicProps } from '../factory';
import { UseStepsProps } from './use-steps';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface StepsRootBaseProps extends UseStepsProps, PolymorphicProps {
}
export interface StepsRootProps extends HTMLProps<'div'>, StepsRootBaseProps {
}
export declare const StepsRoot: ForwardRefExoticComponent<StepsRootProps & RefAttributes<HTMLDivElement>>;
