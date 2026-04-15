import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import * as angleSlider from '@zag-js/angle-slider';
export interface UseAngleSliderProps extends Optional<Omit<angleSlider.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UseAngleSliderReturn extends angleSlider.Api<PropTypes> {
}
export declare const useAngleSlider: (props?: UseAngleSliderProps) => UseAngleSliderReturn;
