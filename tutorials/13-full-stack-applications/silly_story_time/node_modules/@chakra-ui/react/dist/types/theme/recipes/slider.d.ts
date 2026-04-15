export declare const sliderSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "control" | "label" | "valueText" | "thumb" | "track" | "range" | "markerGroup" | "marker" | "draggingIndicator" | "markerIndicator", {
    size: {
        sm: {
            root: {
                "--slider-thumb-size": "sizes.4";
                "--slider-track-size": "sizes.1.5";
                "--slider-marker-center": "6px";
                "--slider-marker-size": "sizes.1";
                "--slider-marker-inset": "3px";
            };
        };
        md: {
            root: {
                "--slider-thumb-size": "sizes.5";
                "--slider-track-size": "sizes.2";
                "--slider-marker-center": "8px";
                "--slider-marker-size": "sizes.1";
                "--slider-marker-inset": "4px";
            };
        };
        lg: {
            root: {
                "--slider-thumb-size": "sizes.6";
                "--slider-track-size": "sizes.2.5";
                "--slider-marker-center": "9px";
                "--slider-marker-size": "sizes.1.5";
                "--slider-marker-inset": "5px";
            };
        };
    };
    variant: {
        outline: {
            track: {
                shadow: "inset";
                bg: "bg.emphasized/72";
            };
            range: {
                bg: "colorPalette.solid";
            };
            thumb: {
                borderWidth: "2px";
                borderColor: "colorPalette.solid";
                bg: "bg";
                _disabled: {
                    bg: "border.emphasized";
                    borderColor: "border.emphasized";
                };
            };
        };
        solid: {
            track: {
                bg: "colorPalette.subtle";
                _disabled: {
                    bg: "bg.muted";
                };
            };
            range: {
                bg: "colorPalette.solid";
            };
            thumb: {
                bg: "colorPalette.solid";
                _disabled: {
                    bg: "border.emphasized";
                };
            };
        };
    };
    orientation: {
        vertical: {
            root: {
                display: "inline-flex";
            };
            control: {
                flexDirection: "column";
                height: "100%";
                minWidth: "var(--slider-thumb-size)";
                "&[data-has-mark-label], &:has(.chakra-slider__marker-label)": {
                    marginEnd: "4";
                };
            };
            track: {
                width: "var(--slider-track-size)";
            };
            thumb: {
                left: "50%";
                translate: "-50% 0";
            };
            markerGroup: {
                insetStart: "var(--slider-marker-center)";
                insetBlock: "var(--slider-marker-inset)";
            };
            marker: {
                flexDirection: "row";
            };
        };
        horizontal: {
            control: {
                flexDirection: "row";
                width: "100%";
                minHeight: "var(--slider-thumb-size)";
                "&[data-has-mark-label], &:has(.chakra-slider__marker-label)": {
                    marginBottom: "4";
                };
            };
            track: {
                height: "var(--slider-track-size)";
            };
            thumb: {
                top: "50%";
                translate: "0 -50%";
            };
            markerGroup: {
                top: "var(--slider-marker-center)";
                insetInline: "var(--slider-marker-inset)";
            };
            marker: {
                flexDirection: "column";
            };
        };
    };
}>;
