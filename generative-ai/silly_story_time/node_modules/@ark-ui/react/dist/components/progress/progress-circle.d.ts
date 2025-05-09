import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ProgressCircleBaseProps extends PolymorphicProps {
}
export interface ProgressCircleProps extends HTMLProps<'svg'>, ProgressCircleBaseProps {
}
export declare const ProgressCircle: ForwardRefExoticComponent<ProgressCircleProps & RefAttributes<SVGSVGElement>>;
