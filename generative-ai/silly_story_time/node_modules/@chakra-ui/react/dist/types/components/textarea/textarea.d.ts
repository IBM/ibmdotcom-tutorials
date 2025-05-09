import { Field } from "@ark-ui/react/field";
import { type HTMLChakraProps, type RecipeProps, type UnstyledProp } from "../../styled-system";
export interface TextareaBaseProps extends RecipeProps<"textarea">, Field.TextareaBaseProps, UnstyledProp {
}
export interface TextareaProps extends HTMLChakraProps<"textarea", TextareaBaseProps> {
}
export declare const Textarea: import("react").ForwardRefExoticComponent<TextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
export declare const TextareaPropsProvider: React.Provider<TextareaProps>;
