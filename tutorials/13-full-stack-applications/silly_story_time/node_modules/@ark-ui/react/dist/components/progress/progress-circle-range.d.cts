import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ProgressCircleRangeBaseProps extends PolymorphicProps {
}
export interface ProgressCircleRangeProps extends HTMLProps<'circle'>, ProgressCircleRangeBaseProps {
}
export declare const ProgressCircleRange: ForwardRefExoticComponent<ProgressCircleRangeProps & RefAttributes<SVGCircleElement>>;
