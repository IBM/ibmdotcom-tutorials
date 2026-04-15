import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ProgressCircleTrackBaseProps extends PolymorphicProps {
}
export interface ProgressCircleTrackProps extends HTMLProps<'circle'>, ProgressCircleTrackBaseProps {
}
export declare const ProgressCircleTrack: ForwardRefExoticComponent<ProgressCircleTrackProps & RefAttributes<SVGCircleElement>>;
