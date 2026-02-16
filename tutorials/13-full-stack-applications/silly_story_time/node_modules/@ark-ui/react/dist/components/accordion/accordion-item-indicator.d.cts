import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface AccordionItemIndicatorBaseProps extends PolymorphicProps {
}
export interface AccordionItemIndicatorProps extends HTMLProps<'div'>, AccordionItemIndicatorBaseProps {
}
export declare const AccordionItemIndicator: ForwardRefExoticComponent<AccordionItemIndicatorProps & RefAttributes<HTMLDivElement>>;
