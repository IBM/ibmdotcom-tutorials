import { HTMLProps, PolymorphicProps } from '../factory';
import { UseAngleSliderReturn } from './use-angle-slider';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseAngleSliderReturn;
}
export interface AngleSliderRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface AngleSliderRootProviderProps extends HTMLProps<'div'>, AngleSliderRootProviderBaseProps {
}
export declare const AngleSliderRootProvider: ForwardRefExoticComponent<AngleSliderRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
