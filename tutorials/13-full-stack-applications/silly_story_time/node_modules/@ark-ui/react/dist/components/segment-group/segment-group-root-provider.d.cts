import { HTMLProps, PolymorphicProps } from '../factory';
import { UseSegmentGroupReturn } from './use-segment-group';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseSegmentGroupReturn;
}
export interface SegmentGroupRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface SegmentGroupRootProviderProps extends HTMLProps<'div'>, SegmentGroupRootProviderBaseProps {
}
export declare const SegmentGroupRootProvider: ForwardRefExoticComponent<SegmentGroupRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
