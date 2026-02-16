import type { Assign } from "@ark-ui/react";
import { Accordion as ArkAccordion } from "@ark-ui/react/accordion";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useAccordionStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useAccordionStyles };
export interface AccordionRootProviderBaseProps extends Assign<ArkAccordion.RootProviderBaseProps, SlotRecipeProps<"accordion">>, UnstyledProp {
}
export interface AccordionRootProviderProps extends HTMLChakraProps<"div", AccordionRootProviderBaseProps> {
}
export declare const AccordionRootProvider: import("react").ForwardRefExoticComponent<AccordionRootProviderProps & import("react").RefAttributes<HTMLDivElement>>;
export interface AccordionRootBaseProps extends Assign<ArkAccordion.RootBaseProps, SlotRecipeProps<"accordion">>, UnstyledProp {
}
export interface AccordionRootProps extends HTMLChakraProps<"div", AccordionRootBaseProps> {
}
export declare const AccordionRoot: import("react").ForwardRefExoticComponent<AccordionRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const AccordionPropsProvider: React.Provider<ArkAccordion.RootBaseProps>;
export interface AccordionItemProps extends HTMLChakraProps<"div", ArkAccordion.ItemBaseProps> {
}
export declare const AccordionItem: import("react").ForwardRefExoticComponent<AccordionItemProps & import("react").RefAttributes<HTMLDivElement>>;
export interface AccordionItemContentProps extends HTMLChakraProps<"div", ArkAccordion.ItemContentBaseProps> {
}
export declare const AccordionItemContent: import("react").ForwardRefExoticComponent<AccordionItemContentProps & import("react").RefAttributes<HTMLDivElement>>;
export interface AccordionItemBodyProps extends HTMLChakraProps<"div"> {
}
export declare const AccordionItemBody: import("react").ForwardRefExoticComponent<AccordionItemBodyProps & import("react").RefAttributes<HTMLDivElement>>;
export interface AccordionItemTriggerProps extends HTMLChakraProps<"button", ArkAccordion.ItemTriggerBaseProps> {
}
export declare const AccordionItemTrigger: import("react").ForwardRefExoticComponent<AccordionItemTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface AccordionItemIndicatorProps extends HTMLChakraProps<"button", ArkAccordion.ItemIndicatorBaseProps> {
}
export declare const AccordionItemIndicator: import("react").ForwardRefExoticComponent<AccordionItemIndicatorProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const AccordionContext: (props: ArkAccordion.ContextProps) => import("react").ReactNode;
export declare const AccordionItemContext: (props: ArkAccordion.ItemContextProps) => import("react").ReactNode;
export interface AccordionFocusChangeDetails extends ArkAccordion.FocusChangeDetails {
}
export interface AccordionValueChangeDetails extends ArkAccordion.ValueChangeDetails {
}
