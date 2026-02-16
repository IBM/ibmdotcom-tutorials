import type { Assign } from "@ark-ui/react";
import { Editable as ArkEditable } from "@ark-ui/react/editable";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useEditableStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useEditableStyles };
export interface EditableRootProviderBaseProps extends Assign<ArkEditable.RootProviderBaseProps, SlotRecipeProps<"editable">>, UnstyledProp {
}
export interface EditableRootProviderProps extends HTMLChakraProps<"div", EditableRootProviderBaseProps> {
}
export declare const EditableRootProvider: import("react").ForwardRefExoticComponent<EditableRootProviderProps & import("react").RefAttributes<HTMLDivElement>>;
export interface EditableRootBaseProps extends Assign<ArkEditable.RootBaseProps, SlotRecipeProps<"editable">>, UnstyledProp {
}
export interface EditableRootProps extends HTMLChakraProps<"div", EditableRootBaseProps> {
}
export declare const EditableRoot: import("react").ForwardRefExoticComponent<EditableRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const EditablePropsProvider: React.Provider<EditableRootBaseProps>;
export interface EditablePreviewProps extends HTMLChakraProps<"span", ArkEditable.PreviewBaseProps> {
}
export declare const EditablePreview: import("react").ForwardRefExoticComponent<EditablePreviewProps & import("react").RefAttributes<HTMLSpanElement>>;
export interface EditableInputProps extends HTMLChakraProps<"input", ArkEditable.InputBaseProps> {
}
export declare const EditableInput: import("react").ForwardRefExoticComponent<EditableInputProps & import("react").RefAttributes<HTMLInputElement>>;
export interface EditableTextareaProps extends HTMLChakraProps<"textarea", ArkEditable.InputBaseProps> {
}
export declare const EditableTextarea: import("react").ForwardRefExoticComponent<EditableTextareaProps & import("react").RefAttributes<HTMLInputElement>>;
export interface EditableControlProps extends HTMLChakraProps<"div", ArkEditable.ControlBaseProps> {
}
export declare const EditableControl: import("react").ForwardRefExoticComponent<EditableControlProps & import("react").RefAttributes<HTMLDivElement>>;
export interface EditableAreaProps extends HTMLChakraProps<"div", ArkEditable.AreaBaseProps> {
}
export declare const EditableArea: import("react").ForwardRefExoticComponent<EditableAreaProps & import("react").RefAttributes<HTMLDivElement>>;
export interface EditableEditTriggerProps extends HTMLChakraProps<"button", ArkEditable.EditTriggerBaseProps> {
}
export declare const EditableEditTrigger: import("react").ForwardRefExoticComponent<EditableEditTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface EditableSubmitTriggerProps extends HTMLChakraProps<"button", ArkEditable.SubmitTriggerBaseProps> {
}
export declare const EditableSubmitTrigger: import("react").ForwardRefExoticComponent<EditableSubmitTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface EditableCancelTriggerProps extends HTMLChakraProps<"button", ArkEditable.CancelTriggerBaseProps> {
}
export declare const EditableCancelTrigger: import("react").ForwardRefExoticComponent<EditableCancelTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const EditableContext: (props: ArkEditable.ContextProps) => import("react").ReactNode;
export interface EditableValueChangeDetails extends ArkEditable.ValueChangeDetails {
}
