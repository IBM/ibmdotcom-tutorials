import { ReactNode } from 'react';
import { UseAngleSliderContext } from './use-angle-slider-context';
export interface AngleSliderContextProps {
    children: (context: UseAngleSliderContext) => ReactNode;
}
export declare const AngleSliderContext: (props: AngleSliderContextProps) => ReactNode;
