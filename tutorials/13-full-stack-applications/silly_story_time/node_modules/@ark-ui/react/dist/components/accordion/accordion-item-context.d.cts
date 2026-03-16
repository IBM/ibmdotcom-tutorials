import { ReactNode } from 'react';
import { UseAccordionItemContext } from './use-accordion-item-context';
export interface AccordionItemContextProps {
    children: (context: UseAccordionItemContext) => ReactNode;
}
export declare const AccordionItemContext: (props: AccordionItemContextProps) => ReactNode;
