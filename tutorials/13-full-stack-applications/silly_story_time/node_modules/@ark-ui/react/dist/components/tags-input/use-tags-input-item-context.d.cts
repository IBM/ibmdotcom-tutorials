import { ItemState } from '@zag-js/tags-input';
import { Provider } from 'react';
export interface UseTagsInputItemContext extends ItemState {
}
export declare const TagsInputItemProvider: Provider<UseTagsInputItemContext>, useTagsInputItemContext: () => UseTagsInputItemContext;
