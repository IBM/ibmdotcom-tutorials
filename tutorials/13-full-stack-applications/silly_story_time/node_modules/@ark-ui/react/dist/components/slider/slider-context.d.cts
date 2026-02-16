import { ReactNode } from 'react';
import { UseSliderContext } from './use-slider-context';
export interface SliderContextProps {
    children: (context: UseSliderContext) => ReactNode;
}
export declare const SliderContext: (props: SliderContextProps) => ReactNode;
