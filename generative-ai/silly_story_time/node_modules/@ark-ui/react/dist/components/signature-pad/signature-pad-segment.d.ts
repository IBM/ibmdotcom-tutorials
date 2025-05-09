import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SignaturePadSegmentBaseProps extends PolymorphicProps {
}
export interface SignaturePadSegmentProps extends HTMLProps<'svg'>, SignaturePadSegmentBaseProps {
}
export declare const SignaturePadSegment: ForwardRefExoticComponent<SignaturePadSegmentProps & RefAttributes<SVGSVGElement>>;
