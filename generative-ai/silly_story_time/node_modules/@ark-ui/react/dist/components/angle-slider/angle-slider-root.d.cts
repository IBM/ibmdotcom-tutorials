import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseAngleSliderProps } from './use-angle-slider';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface AngleSliderRootBaseProps extends UseAngleSliderProps, PolymorphicProps {
}
export interface AngleSliderRootProps extends Assign<HTMLProps<'div'>, AngleSliderRootBaseProps> {
}
export declare const AngleSliderRoot: ForwardRefExoticComponent<AngleSliderRootProps & RefAttributes<HTMLDivElement>>;
