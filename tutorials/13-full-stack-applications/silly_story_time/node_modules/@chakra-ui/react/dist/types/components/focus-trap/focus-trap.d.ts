import { type FocusTrapBaseProps } from "@ark-ui/react/focus-trap";
import { type HTMLChakraProps } from "../../styled-system";
export interface FocusTrapProps extends HTMLChakraProps<"div">, FocusTrapBaseProps {
}
export declare const FocusTrap: import("../..").ChakraComponent<import("react").ForwardRefExoticComponent<import("@ark-ui/react").FocusTrapProps & import("react").RefAttributes<HTMLDivElement>>, {}>;
