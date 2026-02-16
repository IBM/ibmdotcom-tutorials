export declare const stepsSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "item" | "content" | "separator" | "title" | "description" | "indicator" | "list" | "trigger" | "nextTrigger" | "prevTrigger" | "progress", {
    orientation: {
        vertical: {
            root: {
                flexDirection: "row";
                height: "100%";
            };
            list: {
                flexDirection: "column";
                alignItems: "flex-start";
            };
            separator: {
                position: "absolute";
                width: "var(--steps-thickness)";
                height: "100%";
                maxHeight: "calc(100% - var(--steps-size) - var(--steps-gutter) * 2)";
                top: "calc(var(--steps-size) + var(--steps-gutter))";
                insetStart: "calc(var(--steps-size) / 2 - 1px)";
            };
            item: {
                alignItems: "flex-start";
            };
        };
        horizontal: {
            root: {
                flexDirection: "column";
                width: "100%";
            };
            list: {
                flexDirection: "row";
                alignItems: "center";
            };
            separator: {
                width: "100%";
                height: "var(--steps-thickness)";
                marginX: "var(--steps-gutter)";
            };
            item: {
                alignItems: "center";
            };
        };
    };
    variant: {
        solid: {
            indicator: {
                _incomplete: {
                    borderWidth: "var(--steps-thickness)";
                };
                _current: {
                    bg: "colorPalette.muted";
                    borderWidth: "var(--steps-thickness)";
                    borderColor: "colorPalette.solid";
                    color: "colorPalette.fg";
                };
                _complete: {
                    bg: "colorPalette.solid";
                    borderColor: "colorPalette.solid";
                    color: "colorPalette.contrast";
                };
            };
            separator: {
                _complete: {
                    bg: "colorPalette.solid";
                };
            };
        };
        subtle: {
            indicator: {
                _incomplete: {
                    bg: "bg.muted";
                };
                _current: {
                    bg: "colorPalette.muted";
                    color: "colorPalette.fg";
                };
                _complete: {
                    bg: "colorPalette.emphasized";
                    color: "colorPalette.fg";
                };
            };
            separator: {
                _complete: {
                    bg: "colorPalette.emphasized";
                };
            };
        };
    };
    size: {
        xs: {
            root: {
                gap: "2.5";
            };
            list: {
                "--steps-size": "sizes.6";
                "--steps-icon-size": "sizes.3.5";
                textStyle: "xs";
            };
            title: {
                textStyle: "sm";
            };
        };
        sm: {
            root: {
                gap: "3";
            };
            list: {
                "--steps-size": "sizes.8";
                "--steps-icon-size": "sizes.4";
                textStyle: "xs";
            };
            title: {
                textStyle: "sm";
            };
        };
        md: {
            root: {
                gap: "4";
            };
            list: {
                "--steps-size": "sizes.10";
                "--steps-icon-size": "sizes.4";
                textStyle: "sm";
            };
            title: {
                textStyle: "sm";
            };
        };
        lg: {
            root: {
                gap: "6";
            };
            list: {
                "--steps-size": "sizes.11";
                "--steps-icon-size": "sizes.5";
                textStyle: "md";
            };
            title: {
                textStyle: "md";
            };
        };
    };
}>;
