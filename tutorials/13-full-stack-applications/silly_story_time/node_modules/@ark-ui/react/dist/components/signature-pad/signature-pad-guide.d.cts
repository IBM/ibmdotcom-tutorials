import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SignaturePadGuideBaseProps extends PolymorphicProps {
}
export interface SignaturePadGuideProps extends HTMLProps<'div'>, SignaturePadGuideBaseProps {
}
export declare const SignaturePadGuide: ForwardRefExoticComponent<SignaturePadGuideProps & RefAttributes<HTMLDivElement>>;
