import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseProgressProps } from './use-progress';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ProgressRootBaseProps extends UseProgressProps, PolymorphicProps {
}
export interface ProgressRootProps extends Assign<HTMLProps<'div'>, ProgressRootBaseProps> {
}
export declare const ProgressRoot: ForwardRefExoticComponent<ProgressRootProps & RefAttributes<HTMLDivElement>>;
