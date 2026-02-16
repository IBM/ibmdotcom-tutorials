import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import * as zagSwitch from '@zag-js/switch';
export interface UseSwitchProps extends Optional<Omit<zagSwitch.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UseSwitchReturn extends zagSwitch.Api<PropTypes> {
}
export declare const useSwitch: (props?: UseSwitchProps) => UseSwitchReturn;
