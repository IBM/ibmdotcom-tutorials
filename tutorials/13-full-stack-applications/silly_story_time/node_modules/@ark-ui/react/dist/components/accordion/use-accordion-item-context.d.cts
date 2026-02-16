import { ItemState } from '@zag-js/accordion';
import { Provider } from 'react';
export interface UseAccordionItemContext extends ItemState {
}
export declare const AccordionItemProvider: Provider<UseAccordionItemContext>, useAccordionItemContext: () => UseAccordionItemContext;
