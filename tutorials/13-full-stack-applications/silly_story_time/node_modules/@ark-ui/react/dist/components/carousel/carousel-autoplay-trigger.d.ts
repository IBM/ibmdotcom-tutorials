import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface CarouselAutoplayTriggerBaseProps extends PolymorphicProps {
}
export interface CarouselAutoplayTriggerProps extends HTMLProps<'button'>, CarouselAutoplayTriggerBaseProps {
}
export declare const CarouselAutoplayTrigger: ForwardRefExoticComponent<CarouselAutoplayTriggerProps & RefAttributes<HTMLButtonElement>>;
