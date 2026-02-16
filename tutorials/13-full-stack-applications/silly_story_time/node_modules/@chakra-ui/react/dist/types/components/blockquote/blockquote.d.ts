import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useBlockquoteStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useBlockquoteStyles };
export interface BlockquoteRootBaseProps extends SlotRecipeProps<"blockquote">, UnstyledProp {
}
export interface BlockquoteRootProps extends HTMLChakraProps<"figure", BlockquoteRootBaseProps> {
}
export declare const BlockquoteRoot: import("react").ForwardRefExoticComponent<BlockquoteRootProps & import("react").RefAttributes<HTMLElement>>;
export declare const BlockquotePropsProvider: React.Provider<BlockquoteRootBaseProps>;
export interface BlockquoteContentProps extends HTMLChakraProps<"blockquote"> {
}
export declare const BlockquoteContent: import("react").ForwardRefExoticComponent<BlockquoteContentProps & import("react").RefAttributes<HTMLElement>>;
export interface BlockquoteCaptionProps extends HTMLChakraProps<"figcaption"> {
}
export declare const BlockquoteCaption: import("react").ForwardRefExoticComponent<BlockquoteCaptionProps & import("react").RefAttributes<HTMLElement>>;
export interface BlockquoteIconProps extends HTMLChakraProps<"svg"> {
}
export declare const BlockquoteIcon: import("react").ForwardRefExoticComponent<BlockquoteIconProps & import("react").RefAttributes<SVGElement>>;
