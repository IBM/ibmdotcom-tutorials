import { RenderStrategyProps } from '../../utils/render-strategy';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseAccordionReturn } from './use-accordion';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseAccordionReturn;
}
export interface AccordionRootProviderBaseProps extends RootProviderProps, RenderStrategyProps, PolymorphicProps {
}
export interface AccordionRootProviderProps extends HTMLProps<'div'>, AccordionRootProviderBaseProps {
}
export declare const AccordionRootProvider: ForwardRefExoticComponent<AccordionRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
