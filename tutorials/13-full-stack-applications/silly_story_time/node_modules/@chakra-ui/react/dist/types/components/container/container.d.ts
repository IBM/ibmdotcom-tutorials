import { type HTMLChakraProps, type RecipeProps, type UnstyledProp } from "../../styled-system";
export interface ContainerBaseProps extends RecipeProps<"container">, UnstyledProp {
}
export interface ContainerProps extends HTMLChakraProps<"div", ContainerBaseProps> {
}
export declare const Container: import("react").ForwardRefExoticComponent<ContainerProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ContainerPropsProvider: React.Provider<ContainerBaseProps>;
