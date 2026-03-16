import { ResizeTriggerProps } from '@zag-js/floating-panel';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FloatingPanelResizeTriggerBaseProps extends ResizeTriggerProps, PolymorphicProps {
}
export interface FloatingPanelResizeTriggerProps extends HTMLProps<'div'>, FloatingPanelResizeTriggerBaseProps {
}
export declare const FloatingPanelResizeTrigger: ForwardRefExoticComponent<FloatingPanelResizeTriggerProps & RefAttributes<HTMLDivElement>>;
