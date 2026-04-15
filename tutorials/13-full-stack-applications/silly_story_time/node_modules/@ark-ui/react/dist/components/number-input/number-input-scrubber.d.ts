import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface NumberInputScrubberBaseProps extends PolymorphicProps {
}
export interface NumberInputScrubberProps extends HTMLProps<'div'>, NumberInputScrubberBaseProps {
}
export declare const NumberInputScrubber: ForwardRefExoticComponent<NumberInputScrubberProps & RefAttributes<HTMLDivElement>>;
