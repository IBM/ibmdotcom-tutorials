import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import * as hoverCard from '@zag-js/hover-card';
export interface UseHoverCardProps extends Optional<Omit<hoverCard.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UseHoverCardReturn extends hoverCard.Api<PropTypes> {
}
export declare const useHoverCard: (props?: UseHoverCardProps) => UseHoverCardReturn;
