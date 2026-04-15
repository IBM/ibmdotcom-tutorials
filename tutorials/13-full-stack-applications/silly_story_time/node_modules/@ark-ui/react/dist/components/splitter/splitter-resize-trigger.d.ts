import { ResizeTriggerProps } from '@zag-js/splitter';
import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SplitterResizeTriggerBaseProps extends ResizeTriggerProps, PolymorphicProps {
}
export interface SplitterResizeTriggerProps extends Assign<HTMLProps<'button'>, SplitterResizeTriggerBaseProps> {
}
export declare const SplitterResizeTrigger: ForwardRefExoticComponent<SplitterResizeTriggerProps & RefAttributes<HTMLButtonElement>>;
