import { ReactNode } from 'react';
import { UseCarouselContext } from './use-carousel-context';
export interface CarouselContextProps {
    children: (context: UseCarouselContext) => ReactNode;
}
export declare const CarouselContext: (props: CarouselContextProps) => ReactNode;
