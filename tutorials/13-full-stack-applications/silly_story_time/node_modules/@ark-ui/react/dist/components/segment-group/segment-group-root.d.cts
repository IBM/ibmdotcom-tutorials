import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseSegmentGroupProps } from './use-segment-group';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SegmentGroupRootBaseProps extends UseSegmentGroupProps, PolymorphicProps {
}
export interface SegmentGroupRootProps extends Assign<HTMLProps<'div'>, SegmentGroupRootBaseProps> {
}
export declare const SegmentGroupRoot: ForwardRefExoticComponent<SegmentGroupRootProps & RefAttributes<HTMLDivElement>>;
