import { OptionItemState } from '@zag-js/menu';
import { Optional } from '../../types';
import { Provider } from 'react';
export interface UseMenuItemContext extends Optional<OptionItemState, 'checked'> {
}
export declare const MenuItemProvider: Provider<UseMenuItemContext>, useMenuItemContext: () => UseMenuItemContext;
