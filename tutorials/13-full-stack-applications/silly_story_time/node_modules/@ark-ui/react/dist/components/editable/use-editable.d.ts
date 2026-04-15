import { PropTypes } from '@zag-js/types';
import { Optional } from '../../types';
import * as editable from '@zag-js/editable';
export interface UseEditableProps extends Optional<Omit<editable.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UseEditableReturn extends editable.Api<PropTypes> {
}
export declare const useEditable: (props?: UseEditableProps) => UseEditableReturn;
