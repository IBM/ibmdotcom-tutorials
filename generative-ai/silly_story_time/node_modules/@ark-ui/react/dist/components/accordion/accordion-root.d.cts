import { Assign } from '../../types';
import { RenderStrategyProps } from '../../utils/render-strategy';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseAccordionProps } from './use-accordion';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface AccordionRootBaseProps extends UseAccordionProps, RenderStrategyProps, PolymorphicProps {
}
export interface AccordionRootProps extends Assign<HTMLProps<'div'>, AccordionRootBaseProps> {
}
export declare const AccordionRoot: ForwardRefExoticComponent<AccordionRootProps & RefAttributes<HTMLDivElement>>;
