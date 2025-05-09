import { default as React, ComponentPropsWithoutRef, JSX } from 'react';
export interface PolymorphicProps {
    /**
     * Use the provided child element as the default rendered element, combining their props and behavior.
     */
    asChild?: boolean;
}
type JsxElements = {
    [E in keyof JSX.IntrinsicElements]: ArkForwardRefComponent<E>;
};
type ArkForwardRefComponent<E extends React.ElementType> = React.ForwardRefExoticComponent<ArkPropsWithRef<E>>;
type ArkPropsWithRef<E extends React.ElementType> = React.ComponentPropsWithRef<E> & PolymorphicProps;
export type HTMLProps<T extends keyof JSX.IntrinsicElements> = ComponentPropsWithoutRef<T>;
export type HTMLArkProps<T extends keyof JSX.IntrinsicElements> = HTMLProps<T> & PolymorphicProps;
export declare const jsxFactory: () => JsxElements;
export declare const ark: JsxElements;
export {};
