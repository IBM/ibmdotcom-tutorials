import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SliderDraggingIndicatorBaseProps extends PolymorphicProps {
}
export interface SliderDraggingIndicatorProps extends HTMLProps<'span'>, SliderDraggingIndicatorBaseProps {
}
export declare const SliderDraggingIndicator: ForwardRefExoticComponent<SliderDraggingIndicatorProps & RefAttributes<HTMLSpanElement>>;
