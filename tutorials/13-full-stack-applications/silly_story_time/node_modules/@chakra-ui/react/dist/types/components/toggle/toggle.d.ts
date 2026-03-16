import type { Assign } from "@ark-ui/react";
import { Toggle as ArkToggle } from "@ark-ui/react/toggle";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useToggleStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useToggleStyles };
export interface ToggleRootProviderBaseProps extends Assign<ArkToggle.RootBaseProps, SlotRecipeProps<"toggle">>, UnstyledProp {
}
export interface ToggleRootProviderProps extends HTMLChakraProps<"button", ToggleRootProviderBaseProps> {
}
export declare const ToggleRootProvider: import("react").ForwardRefExoticComponent<ToggleRootProviderProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface ToggleRootBaseProps extends Assign<ArkToggle.RootBaseProps, SlotRecipeProps<"toggle">>, UnstyledProp {
}
export interface ToggleRootProps extends HTMLChakraProps<"button", ToggleRootBaseProps> {
}
export declare const ToggleRoot: import("react").ForwardRefExoticComponent<ToggleRootProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const TogglePropsProvider: React.Provider<ToggleRootBaseProps>;
export interface ToggleIndicatorProps extends HTMLChakraProps<"div", ArkToggle.IndicatorBaseProps> {
}
export declare const ToggleIndicator: import("react").ForwardRefExoticComponent<ToggleIndicatorProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const ToggleContext: (props: ArkToggle.ContextProps) => import("react").ReactNode;
