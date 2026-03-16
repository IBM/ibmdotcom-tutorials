import type { Assign } from "@ark-ui/react";
import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useCheckboxCardStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useCheckboxCardStyles };
export interface CheckboxCardRootProviderBaseProps extends Assign<ArkCheckbox.RootProviderBaseProps, SlotRecipeProps<"checkboxCard">>, UnstyledProp {
}
export interface CheckboxCardRootProviderProps extends HTMLChakraProps<"label", CheckboxCardRootProviderBaseProps> {
}
export declare const CheckboxCardRootProvider: import("react").ForwardRefExoticComponent<CheckboxCardRootProviderProps & import("react").RefAttributes<HTMLLabelElement>>;
export interface CheckboxCardRootBaseProps extends Assign<ArkCheckbox.RootBaseProps, SlotRecipeProps<"checkboxCard">>, UnstyledProp {
}
export interface CheckboxCardRootProps extends HTMLChakraProps<"label", CheckboxCardRootBaseProps> {
}
export declare const CheckboxCardRoot: import("react").ForwardRefExoticComponent<CheckboxCardRootProps & import("react").RefAttributes<HTMLLabelElement>>;
export declare const CheckboxCardRootPropsProvider: React.Provider<CheckboxCardRootBaseProps>;
export interface CheckboxCardLabelProps extends HTMLChakraProps<"span", ArkCheckbox.LabelBaseProps> {
}
export declare const CheckboxCardLabel: import("react").ForwardRefExoticComponent<CheckboxCardLabelProps & import("react").RefAttributes<HTMLElement>>;
export interface CheckboxCardDescriptionProps extends HTMLChakraProps<"div"> {
}
export declare const CheckboxCardDescription: import("react").ForwardRefExoticComponent<CheckboxCardDescriptionProps & import("react").RefAttributes<HTMLDivElement>>;
export interface CheckboxCardControlProps extends HTMLChakraProps<"div", ArkCheckbox.ControlBaseProps> {
}
export declare const CheckboxCardControl: import("react").ForwardRefExoticComponent<CheckboxCardControlProps & import("react").RefAttributes<HTMLDivElement>>;
export interface CheckboxCardContentProps extends HTMLChakraProps<"div"> {
}
export declare const CheckboxCardContent: import("react").ForwardRefExoticComponent<CheckboxCardContentProps & import("react").RefAttributes<HTMLDivElement>>;
export interface CheckboxCardIndicatorProps extends HTMLChakraProps<"svg"> {
}
export declare const CheckboxCardIndicator: import("react").ForwardRefExoticComponent<CheckboxCardIndicatorProps & import("react").RefAttributes<SVGSVGElement>>;
export interface CheckboxCardAddonProps extends HTMLChakraProps<"div"> {
}
export declare const CheckboxCardAddon: import("react").ForwardRefExoticComponent<CheckboxCardAddonProps & import("react").RefAttributes<HTMLElement>>;
export declare const CheckboxCardContext: (props: ArkCheckbox.ContextProps) => import("react").ReactNode;
export declare const CheckboxCardHiddenInput: import("react").ForwardRefExoticComponent<ArkCheckbox.HiddenInputProps & import("react").RefAttributes<HTMLInputElement>>;
export interface CheckboxCardCheckedChangeDetails extends ArkCheckbox.CheckedChangeDetails {
}
