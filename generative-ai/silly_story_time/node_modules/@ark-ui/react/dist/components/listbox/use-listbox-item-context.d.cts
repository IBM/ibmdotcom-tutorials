import { ItemState } from '@zag-js/listbox';
import { Provider } from 'react';
export interface UseListboxItemContext extends ItemState {
}
export declare const ListboxItemProvider: Provider<UseListboxItemContext>, useListboxItemContext: () => UseListboxItemContext;
