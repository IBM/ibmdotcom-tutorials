import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import * as tabs from '@zag-js/tabs';
export interface UseTabsProps extends Optional<Omit<tabs.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UseTabsReturn extends tabs.Api<PropTypes> {
}
export declare const useTabs: (props?: UseTabsProps) => UseTabsReturn;
