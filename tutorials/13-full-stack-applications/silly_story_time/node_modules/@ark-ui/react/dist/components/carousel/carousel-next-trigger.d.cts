import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface CarouselNextTriggerBaseProps extends PolymorphicProps {
}
export interface CarouselNextTriggerProps extends HTMLProps<'button'>, CarouselNextTriggerBaseProps {
}
export declare const CarouselNextTrigger: ForwardRefExoticComponent<CarouselNextTriggerProps & RefAttributes<HTMLButtonElement>>;
