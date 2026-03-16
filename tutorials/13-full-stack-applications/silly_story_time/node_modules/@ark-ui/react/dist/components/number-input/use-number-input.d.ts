import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import * as numberInput from '@zag-js/number-input';
export interface UseNumberInputProps extends Optional<Omit<numberInput.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UseNumberInputReturn extends numberInput.Api<PropTypes> {
}
export declare const useNumberInput: (props?: UseNumberInputProps) => UseNumberInputReturn;
