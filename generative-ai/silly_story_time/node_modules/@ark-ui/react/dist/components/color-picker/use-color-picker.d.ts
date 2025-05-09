import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import * as colorPicker from '@zag-js/color-picker';
export interface UseColorPickerProps extends Optional<Omit<colorPicker.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UseColorPickerReturn extends colorPicker.Api<PropTypes> {
}
export declare const useColorPicker: (props?: UseColorPickerProps) => UseColorPickerReturn;
