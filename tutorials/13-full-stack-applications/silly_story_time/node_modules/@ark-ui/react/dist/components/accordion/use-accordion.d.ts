import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import * as accordion from '@zag-js/accordion';
export interface UseAccordionProps extends Optional<Omit<accordion.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UseAccordionReturn extends accordion.Api<PropTypes> {
}
export declare const useAccordion: (props?: UseAccordionProps) => UseAccordionReturn;
