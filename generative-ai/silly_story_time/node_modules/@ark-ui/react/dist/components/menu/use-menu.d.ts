import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import * as menu from '@zag-js/menu';
export interface UseMenuProps extends Optional<Omit<menu.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UseMenuReturn {
    api: menu.Api<PropTypes>;
    service: menu.Service;
}
export declare const useMenu: (props?: UseMenuProps) => UseMenuReturn;
