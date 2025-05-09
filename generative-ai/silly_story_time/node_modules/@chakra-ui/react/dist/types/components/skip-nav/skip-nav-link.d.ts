import { type HTMLChakraProps, type RecipeProps } from "../../styled-system";
export interface SkipNavLinkProps extends HTMLChakraProps<"a">, RecipeProps<"skipNavLink"> {
}
export declare const fallbackId = "chakra-skip-nav";
/**
 * Renders a link that remains hidden until focused to skip to the main content.
 *
 * @see Docs https://chakra-ui.com/docs/components/skip-nav
 */
export declare const SkipNavLink: import("react").ForwardRefExoticComponent<SkipNavLinkProps & import("react").RefAttributes<HTMLAnchorElement>>;
