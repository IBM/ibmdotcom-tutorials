import { type HTMLChakraProps } from "../../styled-system";
export interface LinkOverlayProps extends HTMLChakraProps<"a"> {
}
export declare const LinkOverlay: import("react").ForwardRefExoticComponent<LinkOverlayProps & import("react").RefAttributes<HTMLAnchorElement>>;
export interface LinkBoxProps extends HTMLChakraProps<"div"> {
}
/**
 * `LinkBox` is used to wrap content areas within a link while ensuring semantic html
 *
 * @see Docs https://chakra-ui.com/docs/navigation/link-overlay
 * @see Resources https://www.sarasoueidan.com/blog/nested-links
 */
export declare const LinkBox: import("react").ForwardRefExoticComponent<LinkBoxProps & import("react").RefAttributes<HTMLDivElement>>;
