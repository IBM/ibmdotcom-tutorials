import { PropTypes } from '@zag-js/react';
import * as toggle from '@zag-js/toggle';
export interface UseToggleProps extends toggle.Props {
}
export interface UseToggleReturn extends toggle.Api<PropTypes> {
}
export declare function useToggle(props?: UseToggleProps): UseToggleReturn;
