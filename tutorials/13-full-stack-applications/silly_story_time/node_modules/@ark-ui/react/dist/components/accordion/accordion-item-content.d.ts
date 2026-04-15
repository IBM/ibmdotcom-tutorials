import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface AccordionItemContentBaseProps extends PolymorphicProps {
}
export interface AccordionItemContentProps extends HTMLProps<'div'>, AccordionItemContentBaseProps {
}
export declare const AccordionItemContent: ForwardRefExoticComponent<AccordionItemContentProps & RefAttributes<HTMLDivElement>>;
