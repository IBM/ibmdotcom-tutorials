import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import * as tooltip from '@zag-js/tooltip';
export interface UseTooltipProps extends Optional<Omit<tooltip.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UseTooltipReturn extends tooltip.Api<PropTypes> {
}
export declare const useTooltip: (props?: UseTooltipProps) => UseTooltipReturn;
