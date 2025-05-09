import type { Assign } from "@ark-ui/react";
import { QrCode as ArkQrCode } from "@ark-ui/react/qr-code";
import { type HTMLChakraProps, type SlotRecipeProps, type UnstyledProp } from "../../styled-system";
declare const useQrCodeStyles: () => Record<string, import("../..").SystemStyleObject>;
export { useQrCodeStyles };
export interface QrCodeRootBaseProps extends Assign<ArkQrCode.RootBaseProps, SlotRecipeProps<"qrCode">>, UnstyledProp {
}
export interface QrCodeRootProps extends HTMLChakraProps<"div", QrCodeRootBaseProps> {
}
export declare const QrCodeRoot: import("react").ForwardRefExoticComponent<QrCodeRootProps & import("react").RefAttributes<HTMLDivElement>>;
export interface QrCodeRootProviderBaseProps extends Assign<ArkQrCode.RootProviderBaseProps, SlotRecipeProps<"qrCode">>, UnstyledProp {
}
export interface QrCodeRootProviderProps extends HTMLChakraProps<"div", QrCodeRootProviderBaseProps> {
}
export declare const QrCodeRootProvider: import("react").ForwardRefExoticComponent<QrCodeRootProviderProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const QrCodePropsProvider: React.Provider<QrCodeRootBaseProps>;
export interface QrCodePatternProps extends HTMLChakraProps<"path"> {
}
export declare const QrCodePattern: import("react").ForwardRefExoticComponent<QrCodePatternProps & import("react").RefAttributes<SVGPathElement>>;
export interface QrCodeFrameProps extends HTMLChakraProps<"svg"> {
}
export declare const QrCodeFrame: import("react").ForwardRefExoticComponent<QrCodeFrameProps & import("react").RefAttributes<SVGSVGElement>>;
export interface QrCodeOverlayProps extends HTMLChakraProps<"div"> {
}
export declare const QrCodeOverlay: import("react").ForwardRefExoticComponent<QrCodeOverlayProps & import("react").RefAttributes<HTMLDivElement>>;
export interface QrCodeDownloadTriggerProps extends HTMLChakraProps<"button", ArkQrCode.DownloadTriggerBaseProps> {
}
export declare const QrCodeDownloadTrigger: import("react").ForwardRefExoticComponent<QrCodeDownloadTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
