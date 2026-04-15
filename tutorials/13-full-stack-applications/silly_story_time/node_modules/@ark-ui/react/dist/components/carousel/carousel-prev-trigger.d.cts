import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface CarouselPrevTriggerBaseProps extends PolymorphicProps {
}
export interface CarouselPrevTriggerProps extends HTMLProps<'button'>, CarouselPrevTriggerBaseProps {
}
export declare const CarouselPrevTrigger: ForwardRefExoticComponent<CarouselPrevTriggerProps & RefAttributes<HTMLButtonElement>>;
