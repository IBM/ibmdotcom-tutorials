import type { Assign } from "@ark-ui/react";
import { Steps as ArkSteps } from "@ark-ui/react/steps";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useStepsStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useStepsStyles };
export interface StepsRootProviderBaseProps extends Assign<ArkSteps.RootProviderBaseProps, SlotRecipeProps<"steps">>, UnstyledProp {
}
export interface StepsRootProviderProps extends HTMLChakraProps<"div", StepsRootProviderBaseProps> {
}
export declare const StepsRootProvider: import("react").ForwardRefExoticComponent<StepsRootProviderProps & import("react").RefAttributes<HTMLDivElement>>;
export interface StepsRootBaseProps extends Assign<ArkSteps.RootBaseProps, SlotRecipeProps<"steps">>, UnstyledProp {
}
export interface StepsRootProps extends HTMLChakraProps<"div", StepsRootBaseProps> {
}
export declare const StepsRoot: import("react").ForwardRefExoticComponent<StepsRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const StepsPropsProvider: React.Provider<StepsRootBaseProps>;
export interface StepsListProps extends HTMLChakraProps<"div", ArkSteps.ListBaseProps> {
}
export declare const StepsList: import("react").ForwardRefExoticComponent<StepsListProps & import("react").RefAttributes<HTMLDivElement>>;
export interface StepsItemProps extends HTMLChakraProps<"div", ArkSteps.ItemBaseProps> {
}
export declare const StepsItem: import("react").ForwardRefExoticComponent<StepsItemProps & import("react").RefAttributes<HTMLDivElement>>;
export interface StepsTriggerProps extends HTMLChakraProps<"button", ArkSteps.TriggerBaseProps> {
}
export declare const StepsTrigger: import("react").ForwardRefExoticComponent<StepsTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface StepsContentProps extends HTMLChakraProps<"div", ArkSteps.ContentBaseProps> {
}
export declare const StepsContent: import("react").ForwardRefExoticComponent<StepsContentProps & import("react").RefAttributes<HTMLDivElement>>;
export interface StepsCompletedContentProps extends HTMLChakraProps<"div"> {
}
export declare const StepsCompletedContent: import("react").ForwardRefExoticComponent<StepsCompletedContentProps & import("react").RefAttributes<HTMLDivElement>>;
export interface StepsNumberProps extends HTMLChakraProps<"div"> {
}
export declare const StepsNumber: import("react").ForwardRefExoticComponent<StepsNumberProps & import("react").RefAttributes<HTMLDivElement>>;
export interface StepsTitleProps extends HTMLChakraProps<"div"> {
}
export declare const StepsTitle: import("react").ForwardRefExoticComponent<StepsTitleProps & import("react").RefAttributes<HTMLDivElement>>;
export interface StepsDescriptionProps extends HTMLChakraProps<"div"> {
}
export declare const StepsDescription: import("react").ForwardRefExoticComponent<StepsDescriptionProps & import("react").RefAttributes<HTMLDivElement>>;
export interface StepsSeparatorProps extends HTMLChakraProps<"div", ArkSteps.SeparatorBaseProps> {
}
export declare const StepsSeparator: import("react").ForwardRefExoticComponent<StepsSeparatorProps & import("react").RefAttributes<HTMLDivElement>>;
export interface StepsStatusProps {
    complete: React.ReactNode;
    incomplete: React.ReactNode;
    current?: React.ReactNode;
}
export declare const StepsStatus: (props: StepsStatusProps) => import("react/jsx-runtime").JSX.Element;
export interface StepsIndicatorProps extends HTMLChakraProps<"div", ArkSteps.IndicatorBaseProps> {
}
export declare const StepsIndicator: import("react").ForwardRefExoticComponent<StepsIndicatorProps & import("react").RefAttributes<HTMLDivElement>>;
export interface StepsNextTriggerProps extends HTMLChakraProps<"button", ArkSteps.NextTriggerBaseProps> {
}
export declare const StepsNextTrigger: import("react").ForwardRefExoticComponent<StepsNextTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface StepsPrevTriggerProps extends HTMLChakraProps<"button", ArkSteps.PrevTriggerBaseProps> {
}
export declare const StepsPrevTrigger: import("react").ForwardRefExoticComponent<StepsPrevTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const StepsContext: {
    (props: ArkSteps.ContextProps): import("react").ReactNode;
    displayName: string;
};
export declare const StepsItemContext: {
    (props: ArkSteps.ItemContextProps): import("react").ReactNode;
    displayName: string;
};
export interface StepsChangeDetails extends ArkSteps.ChangeDetails {
}
