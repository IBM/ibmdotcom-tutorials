import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import * as timePicker from '@zag-js/time-picker';
export interface UseTimePickerProps extends Optional<Omit<timePicker.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UseTimePickerReturn extends timePicker.Api<PropTypes> {
}
export declare const useTimePicker: (props?: UseTimePickerProps) => UseTimePickerReturn;
