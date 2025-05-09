import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface StepsProgressBaseProps extends PolymorphicProps {
}
export interface StepsProgressProps extends HTMLProps<'div'>, StepsProgressBaseProps {
}
export declare const StepsProgress: ForwardRefExoticComponent<StepsProgressProps & RefAttributes<HTMLDivElement>>;
