import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useCardStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useCardStyles };
export interface CardRootBaseProps extends SlotRecipeProps<"card">, UnstyledProp {
}
export interface CardRootProps extends HTMLChakraProps<"div", CardRootBaseProps> {
}
export declare const CardRoot: import("react").ForwardRefExoticComponent<CardRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const CardPropsProvider: React.Provider<CardRootBaseProps>;
export interface CardBodyProps extends HTMLChakraProps<"div"> {
}
export declare const CardBody: import("react").ForwardRefExoticComponent<CardBodyProps & import("react").RefAttributes<HTMLDivElement>>;
export interface CardHeaderProps extends HTMLChakraProps<"div"> {
}
export declare const CardHeader: import("react").ForwardRefExoticComponent<CardHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
export interface CardFooterProps extends HTMLChakraProps<"div"> {
}
export declare const CardFooter: import("react").ForwardRefExoticComponent<CardFooterProps & import("react").RefAttributes<HTMLDivElement>>;
export interface CardTitleProps extends HTMLChakraProps<"h2"> {
}
export declare const CardTitle: import("react").ForwardRefExoticComponent<CardTitleProps & import("react").RefAttributes<HTMLHeadingElement>>;
export interface CardDescriptionProps extends HTMLChakraProps<"p"> {
}
export declare const CardDescription: import("react").ForwardRefExoticComponent<CardDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>>;
