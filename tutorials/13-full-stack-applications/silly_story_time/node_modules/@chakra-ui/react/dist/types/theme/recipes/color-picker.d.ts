export declare const colorPickerSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "positioner" | "content" | "control" | "label" | "trigger" | "area" | "valueText" | "view" | "formatSelect" | "areaThumb" | "channelInput" | "channelSliderTrack" | "channelSliderThumb" | "areaBackground" | "channelSlider" | "channelSliderLabel" | "channelSliderValueText" | "transparencyGrid" | "swatchGroup" | "swatchTrigger" | "swatchIndicator" | "swatch" | "eyeDropperTrigger" | "formatTrigger" | "channelText", {
    size: {
        "2xs": {
            channelInput: {
                textStyle: "xs";
                px: "2";
                "--input-height": "sizes.7";
            } | undefined;
            swatch: {
                "--swatch-size": "sizes.4.5";
            };
            trigger: {
                "--input-height": "sizes.7";
            };
            area: {
                "--thumb-size": "sizes.3";
            };
            channelSlider: {
                "--slider-height": "sizes.3";
                "--thumb-size": "sizes.3";
            };
        };
        xs: {
            channelInput: {
                textStyle: "xs";
                px: "2";
                "--input-height": "sizes.8";
            } | undefined;
            swatch: {
                "--swatch-size": "sizes.5";
            };
            trigger: {
                "--input-height": "sizes.8";
            };
            area: {
                "--thumb-size": "sizes.3.5";
            };
            channelSlider: {
                "--slider-height": "sizes.3.5";
                "--thumb-size": "sizes.3.5";
            };
        };
        sm: {
            channelInput: {
                textStyle: "sm";
                px: "2.5";
                "--input-height": "sizes.9";
            } | undefined;
            swatch: {
                "--swatch-size": "sizes.6";
            };
            trigger: {
                "--input-height": "sizes.9";
            };
            area: {
                "--thumb-size": "sizes.3.5";
            };
            channelSlider: {
                "--slider-height": "sizes.3.5";
                "--thumb-size": "sizes.3.5";
            };
        };
        md: {
            channelInput: {
                textStyle: "sm";
                px: "3";
                "--input-height": "sizes.10";
            } | undefined;
            swatch: {
                "--swatch-size": "sizes.7";
            };
            trigger: {
                "--input-height": "sizes.10";
            };
            area: {
                "--thumb-size": "sizes.3.5";
            };
            channelSlider: {
                "--slider-height": "sizes.3.5";
                "--thumb-size": "sizes.3.5";
            };
        };
        lg: {
            channelInput: {
                textStyle: "md";
                px: "4";
                "--input-height": "sizes.11";
            } | undefined;
            swatch: {
                "--swatch-size": "sizes.7";
            };
            trigger: {
                "--input-height": "sizes.11";
            };
            area: {
                "--thumb-size": "sizes.3.5";
            };
            channelSlider: {
                "--slider-height": "sizes.3.5";
                "--thumb-size": "sizes.3.5";
            };
        };
        xl: {
            channelInput: {
                textStyle: "md";
                px: "4.5";
                "--input-height": "sizes.12";
            } | undefined;
            swatch: {
                "--swatch-size": "sizes.8";
            };
            trigger: {
                "--input-height": "sizes.12";
            };
            area: {
                "--thumb-size": "sizes.3.5";
            };
            channelSlider: {
                "--slider-height": "sizes.3.5";
                "--thumb-size": "sizes.3.5";
            };
        };
        "2xl": {
            channelInput: {
                textStyle: "lg";
                px: "5";
                "--input-height": "sizes.16";
            } | undefined;
            swatch: {
                "--swatch-size": "sizes.10";
            };
            trigger: {
                "--input-height": "sizes.16";
            };
            area: {
                "--thumb-size": "sizes.3.5";
            };
            channelSlider: {
                "--slider-height": "sizes.3.5";
                "--thumb-size": "sizes.3.5";
            };
        };
    };
    variant: {
        outline: {
            channelInput: {
                bg: "transparent";
                borderWidth: "1px";
                borderColor: "border";
                focusVisibleRing: "inside";
                focusRingColor: "var(--focus-color)";
            } | undefined;
            trigger: {
                borderWidth: "1px";
            };
        };
        subtle: {
            channelInput: {
                borderWidth: "1px";
                borderColor: "transparent";
                bg: "bg.muted";
                focusVisibleRing: "inside";
                focusRingColor: "var(--focus-color)";
            } | undefined;
            trigger: {
                borderWidth: "1px";
                borderColor: "transparent";
                bg: "bg.muted";
            };
        };
    };
}>;
