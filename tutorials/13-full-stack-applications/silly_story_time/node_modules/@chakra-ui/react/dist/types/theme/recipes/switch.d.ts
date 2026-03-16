export declare const switchSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "indicator" | "control" | "label" | "thumb", {
    variant: {
        solid: {
            control: {
                borderRadius: "full";
                bg: "bg.emphasized";
                focusVisibleRing: "outside";
                _checked: {
                    bg: "colorPalette.solid";
                };
            };
            thumb: {
                bg: "white";
                width: "var(--switch-height)";
                height: "var(--switch-height)";
                scale: "0.8";
                boxShadow: "sm";
                _checked: {
                    bg: "colorPalette.contrast";
                };
            };
        };
        raised: {
            control: {
                borderRadius: "full";
                height: "calc(var(--switch-height) / 2)";
                bg: "bg.muted";
                boxShadow: "inset";
                _checked: {
                    bg: "colorPalette.solid/60";
                };
            };
            thumb: {
                width: "var(--switch-height)";
                height: "var(--switch-height)";
                position: "relative";
                top: "calc(var(--switch-height) * -0.25)";
                bg: "white";
                boxShadow: "xs";
                focusVisibleRing: "outside";
                _checked: {
                    bg: "colorPalette.solid";
                };
            };
        };
    };
    size: {
        xs: {
            root: {
                "--switch-width": "sizes.6";
                "--switch-height": "sizes.3";
                "--switch-indicator-font-size": "fontSizes.xs";
            };
        };
        sm: {
            root: {
                "--switch-width": "sizes.8";
                "--switch-height": "sizes.4";
                "--switch-indicator-font-size": "fontSizes.xs";
            };
        };
        md: {
            root: {
                "--switch-width": "sizes.10";
                "--switch-height": "sizes.5";
                "--switch-indicator-font-size": "fontSizes.sm";
            };
        };
        lg: {
            root: {
                "--switch-width": "sizes.12";
                "--switch-height": "sizes.6";
                "--switch-indicator-font-size": "fontSizes.md";
            };
        };
    };
}>;
