import { ReactNode } from 'react';
import { UseAccordionContext } from './use-accordion-context';
export interface AccordionContextProps {
    children: (context: UseAccordionContext) => ReactNode;
}
export declare const AccordionContext: (props: AccordionContextProps) => ReactNode;
