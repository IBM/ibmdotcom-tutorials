import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useTagStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useTagStyles };
export interface TagRootBaseProps extends SlotRecipeProps<"tag">, UnstyledProp {
}
export interface TagRootProps extends HTMLChakraProps<"span", TagRootBaseProps> {
}
export declare const TagRoot: import("react").ForwardRefExoticComponent<TagRootProps & import("react").RefAttributes<HTMLSpanElement>>;
export declare const TagRootPropsProvider: React.Provider<TagRootBaseProps>;
export interface TagLabelProps extends HTMLChakraProps<"span"> {
}
export declare const TagLabel: import("react").ForwardRefExoticComponent<TagLabelProps & import("react").RefAttributes<HTMLSpanElement>>;
export interface TagCloseTriggerProps extends HTMLChakraProps<"button"> {
}
export declare const TagCloseTrigger: import("react").ForwardRefExoticComponent<TagCloseTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface TagStartElementProps extends HTMLChakraProps<"span"> {
}
export declare const TagStartElement: import("react").ForwardRefExoticComponent<TagStartElementProps & import("react").RefAttributes<HTMLSpanElement>>;
export interface TagEndElementProps extends HTMLChakraProps<"span"> {
}
export declare const TagEndElement: import("react").ForwardRefExoticComponent<TagEndElementProps & import("react").RefAttributes<HTMLSpanElement>>;
