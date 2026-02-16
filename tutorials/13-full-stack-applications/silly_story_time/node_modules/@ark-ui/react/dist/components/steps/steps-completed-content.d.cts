import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface StepsCompletedContentBaseProps extends PolymorphicProps {
}
export interface StepsCompletedContentProps extends HTMLProps<'div'>, StepsCompletedContentBaseProps {
}
export declare const StepsCompletedContent: ForwardRefExoticComponent<StepsCompletedContentProps & RefAttributes<HTMLDivElement>>;
