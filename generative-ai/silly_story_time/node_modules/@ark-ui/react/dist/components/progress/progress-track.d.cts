import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ProgressTrackBaseProps extends PolymorphicProps {
}
export interface ProgressTrackProps extends HTMLProps<'div'>, ProgressTrackBaseProps {
}
export declare const ProgressTrack: ForwardRefExoticComponent<ProgressTrackProps & RefAttributes<HTMLDivElement>>;
