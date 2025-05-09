import { IndicatorProps } from '@zag-js/carousel';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface CarouselIndicatorBaseProps extends IndicatorProps, PolymorphicProps {
}
export interface CarouselIndicatorProps extends HTMLProps<'button'>, CarouselIndicatorBaseProps {
}
export declare const CarouselIndicator: ForwardRefExoticComponent<CarouselIndicatorProps & RefAttributes<HTMLButtonElement>>;
