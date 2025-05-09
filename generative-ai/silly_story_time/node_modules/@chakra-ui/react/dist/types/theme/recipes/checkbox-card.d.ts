export declare const checkboxCardSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "content" | "description" | "indicator" | "control" | "label" | "addon", {
    size: {
        sm: {
            root: {
                textStyle: "sm";
            };
            control: {
                padding: "3";
                gap: "1.5";
            };
            addon: {
                px: "3";
                py: "1.5";
                borderTopWidth: "1px";
            };
            indicator: {
                boxSize: "4";
            } | undefined;
        };
        md: {
            root: {
                textStyle: "sm";
            };
            control: {
                padding: "4";
                gap: "2.5";
            };
            addon: {
                px: "4";
                py: "2";
                borderTopWidth: "1px";
            };
            indicator: {
                boxSize: "5";
                p: "0.5";
            } | undefined;
        };
        lg: {
            root: {
                textStyle: "md";
            };
            control: {
                padding: "4";
                gap: "3.5";
            };
            addon: {
                px: "4";
                py: "2";
                borderTopWidth: "1px";
            };
            indicator: {
                boxSize: "6";
                p: "0.5";
            } | undefined;
        };
    };
    variant: {
        surface: {
            root: {
                borderWidth: "1px";
                borderColor: "border";
                _checked: {
                    bg: "colorPalette.subtle";
                    color: "colorPalette.fg";
                    borderColor: "colorPalette.muted";
                };
                _disabled: {
                    bg: "bg.muted";
                };
            };
            indicator: {
                borderColor: "border";
                "&:is([data-state=checked], [data-state=indeterminate])": {
                    bg: "colorPalette.solid";
                    color: "colorPalette.contrast";
                    borderColor: "colorPalette.solid";
                };
            } | undefined;
        };
        subtle: {
            root: {
                bg: "bg.muted";
            };
            control: {
                _checked: {
                    bg: "colorPalette.muted";
                    color: "colorPalette.fg";
                };
            };
            indicator: {
                "&:is([data-state=checked], [data-state=indeterminate])": {
                    color: "colorPalette.fg";
                };
            } | undefined;
        };
        outline: {
            root: {
                borderWidth: "1px";
                borderColor: "border";
                _checked: {
                    boxShadow: "0 0 0 1px var(--shadow-color)";
                    boxShadowColor: "colorPalette.solid";
                    borderColor: "colorPalette.solid";
                };
            };
            indicator: {
                borderColor: "border";
                "&:is([data-state=checked], [data-state=indeterminate])": {
                    bg: "colorPalette.solid";
                    color: "colorPalette.contrast";
                    borderColor: "colorPalette.solid";
                };
            } | undefined;
        };
        solid: {
            root: {
                borderWidth: "1px";
                _checked: {
                    bg: "colorPalette.solid";
                    color: "colorPalette.contrast";
                    borderColor: "colorPalette.solid";
                };
            };
            indicator: {
                borderColor: "border";
                color: "colorPalette.fg";
                "&:is([data-state=checked], [data-state=indeterminate])": {
                    borderColor: "colorPalette.solid";
                };
            } | undefined;
        };
    };
    justify: {
        start: {
            root: {
                "--checkbox-card-justify": "flex-start";
            };
        };
        end: {
            root: {
                "--checkbox-card-justify": "flex-end";
            };
        };
        center: {
            root: {
                "--checkbox-card-justify": "center";
            };
        };
    };
    align: {
        start: {
            root: {
                "--checkbox-card-align": "flex-start";
            };
            content: {
                textAlign: "start";
            };
        };
        end: {
            root: {
                "--checkbox-card-align": "flex-end";
            };
            content: {
                textAlign: "end";
            };
        };
        center: {
            root: {
                "--checkbox-card-align": "center";
            };
            content: {
                textAlign: "center";
            };
        };
    };
    orientation: {
        vertical: {
            control: {
                flexDirection: "column";
            };
        };
        horizontal: {
            control: {
                flexDirection: "row";
            };
        };
    };
}>;
