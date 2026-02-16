import type { Assign } from "@ark-ui/react";
import { type PresenceProps as ArkPresenceProps } from "@ark-ui/react/presence";
import { type HTMLChakraProps } from "../../styled-system";
export interface PresenceProps extends Assign<HTMLChakraProps<"div">, ArkPresenceProps> {
}
export declare const Presence: import("../..").ChakraComponent<import("react").ForwardRefExoticComponent<ArkPresenceProps & import("react").RefAttributes<HTMLDivElement>>, {}>;
