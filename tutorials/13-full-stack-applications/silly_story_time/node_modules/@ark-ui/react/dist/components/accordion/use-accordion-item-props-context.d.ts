import { ItemProps } from '@zag-js/accordion';
import { Provider } from 'react';
export interface UseAccordionItemPropsContext extends ItemProps {
}
export declare const AccordionItemPropsProvider: Provider<ItemProps>, useAccordionItemPropsContext: () => ItemProps;
