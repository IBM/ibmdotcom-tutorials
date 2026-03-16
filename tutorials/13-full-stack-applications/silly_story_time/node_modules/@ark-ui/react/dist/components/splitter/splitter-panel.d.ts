import { PanelProps } from '@zag-js/splitter';
import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SplitterPanelBaseProps extends PanelProps, PolymorphicProps {
}
export interface SplitterPanelProps extends Assign<HTMLProps<'div'>, SplitterPanelBaseProps> {
}
export declare const SplitterPanel: ForwardRefExoticComponent<SplitterPanelProps & RefAttributes<HTMLDivElement>>;
