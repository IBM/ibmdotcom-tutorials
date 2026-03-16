import { ItemProps } from '@zag-js/radio-group';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SegmentGroupItemBaseProps extends ItemProps, PolymorphicProps {
}
export interface SegmentGroupItemProps extends HTMLProps<'label'>, SegmentGroupItemBaseProps {
}
export declare const SegmentGroupItem: ForwardRefExoticComponent<SegmentGroupItemProps & RefAttributes<HTMLLabelElement>>;
