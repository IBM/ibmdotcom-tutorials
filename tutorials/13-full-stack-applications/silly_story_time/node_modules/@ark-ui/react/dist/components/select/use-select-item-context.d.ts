import { ItemState } from '@zag-js/select';
import { Provider } from 'react';
export interface UseSelectItemContext extends ItemState {
}
export declare const SelectItemProvider: Provider<UseSelectItemContext>, useSelectItemContext: () => UseSelectItemContext;
