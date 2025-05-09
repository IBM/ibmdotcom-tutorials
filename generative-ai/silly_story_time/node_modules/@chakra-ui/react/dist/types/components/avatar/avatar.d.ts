import type { Assign } from "@ark-ui/react";
import { Avatar as ArkAvatar } from "@ark-ui/react/avatar";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
import { type GroupProps } from "../group";
declare const useAvatarStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useAvatarStyles };
export interface AvatarRootProviderBaseProps extends Assign<ArkAvatar.RootProviderBaseProps, SlotRecipeProps<"avatar">>, UnstyledProp {
}
export interface AvatarRootProviderProps extends HTMLChakraProps<"div", AvatarRootProviderBaseProps> {
}
export declare const AvatarRootProvider: import("react").ForwardRefExoticComponent<AvatarRootProviderProps & import("react").RefAttributes<HTMLDivElement>>;
export interface AvatarRootBaseProps extends Assign<ArkAvatar.RootBaseProps, SlotRecipeProps<"avatar">>, UnstyledProp {
}
export interface AvatarRootProps extends HTMLChakraProps<"div", AvatarRootBaseProps> {
}
export declare const AvatarRoot: import("react").ForwardRefExoticComponent<AvatarRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const AvatarPropsProvider: React.Provider<AvatarRootBaseProps>;
export interface AvatarFallbackProps extends HTMLChakraProps<"div", ArkAvatar.FallbackProps> {
    /**
     * The name to derive the initials from.
     * If not provided, the fallback will display a generic icon.
     */
    name?: string;
}
export declare const AvatarFallback: import("react").ForwardRefExoticComponent<AvatarFallbackProps & import("react").RefAttributes<HTMLDivElement>>;
export interface AvatarImageProps extends HTMLChakraProps<"img", ArkAvatar.ImageProps> {
}
export declare const AvatarImage: import("react").ForwardRefExoticComponent<AvatarImageProps & import("react").RefAttributes<HTMLImageElement>>;
export interface AvatarIconProps extends HTMLChakraProps<"svg"> {
}
export declare const AvatarIcon: import("react").ForwardRefExoticComponent<AvatarIconProps & import("react").RefAttributes<SVGElement>>;
export declare const AvatarContext: (props: ArkAvatar.ContextProps) => import("react").ReactNode;
export interface AvatarStatusChangeDetails extends ArkAvatar.StatusChangeDetails {
}
export interface AvatarGroupProps extends GroupProps, SlotRecipeProps<"avatar"> {
}
export declare const AvatarGroup: import("react").ForwardRefExoticComponent<AvatarGroupProps & import("react").RefAttributes<HTMLDivElement>>;
