import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import * as slider from '@zag-js/slider';
export interface UseSliderProps extends Optional<Omit<slider.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UseSliderReturn extends slider.Api<PropTypes> {
}
export declare const useSlider: (props?: UseSliderProps) => UseSliderReturn;
