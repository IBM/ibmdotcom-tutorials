import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import * as pinInput from '@zag-js/pin-input';
export interface UsePinInputProps extends Optional<Omit<pinInput.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UsePinInputReturn extends pinInput.Api<PropTypes> {
}
export declare const usePinInput: (props?: UsePinInputProps) => UsePinInputReturn;
