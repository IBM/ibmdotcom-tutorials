import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import * as radio from '@zag-js/radio-group';
export interface UseRadioGroupProps extends Optional<Omit<radio.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UseRadioGroupReturn extends radio.Api<PropTypes> {
}
export declare const useRadioGroup: (props?: UseRadioGroupProps) => UseRadioGroupReturn;
