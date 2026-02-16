import { ViewProps } from '@zag-js/progress';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ProgressViewBaseProps extends ViewProps, PolymorphicProps {
}
export interface ProgressViewProps extends HTMLProps<'span'>, ProgressViewBaseProps {
}
export declare const ProgressView: ForwardRefExoticComponent<ProgressViewProps & RefAttributes<HTMLSpanElement>>;
