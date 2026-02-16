import { StageTriggerProps } from '@zag-js/floating-panel';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FloatingPanelStageTriggerBaseProps extends PolymorphicProps, StageTriggerProps {
}
export interface FloatingPanelStageTriggerProps extends HTMLProps<'button'>, FloatingPanelStageTriggerBaseProps {
}
export declare const FloatingPanelStageTrigger: ForwardRefExoticComponent<FloatingPanelStageTriggerProps & RefAttributes<HTMLButtonElement>>;
