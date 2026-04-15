import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface AccordionItemTriggerBaseProps extends PolymorphicProps {
}
export interface AccordionItemTriggerProps extends HTMLProps<'button'>, AccordionItemTriggerBaseProps {
}
export declare const AccordionItemTrigger: ForwardRefExoticComponent<AccordionItemTriggerProps & RefAttributes<HTMLButtonElement>>;
