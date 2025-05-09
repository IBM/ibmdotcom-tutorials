import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface StepsIndicatorBaseProps extends PolymorphicProps {
}
export interface StepsIndicatorProps extends HTMLProps<'div'>, StepsIndicatorBaseProps {
}
export declare const StepsIndicator: ForwardRefExoticComponent<StepsIndicatorProps & RefAttributes<HTMLDivElement>>;
