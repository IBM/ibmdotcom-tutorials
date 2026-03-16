export declare const progressSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "label" | "valueText" | "track" | "range" | "view" | "circle" | "circleTrack" | "circleRange", {
    variant: {
        outline: {
            track: {
                shadow: "inset";
                bgColor: "bg.muted";
            };
            range: {
                bgColor: "colorPalette.solid";
            };
        };
        subtle: {
            track: {
                bgColor: "colorPalette.muted";
            };
            range: {
                bgColor: "colorPalette.solid/72";
            };
        };
    };
    shape: {
        square: {};
        rounded: {
            track: {
                borderRadius: "l1";
            };
        };
        full: {
            track: {
                borderRadius: "full";
            };
        };
    };
    striped: {
        true: {
            range: {
                backgroundImage: "linear-gradient(45deg, var(--stripe-color) 25%, transparent 25%, transparent 50%, var(--stripe-color) 50%, var(--stripe-color) 75%, transparent 75%, transparent)";
                backgroundSize: "var(--stripe-size) var(--stripe-size)";
                "--stripe-size": "1rem";
                "--stripe-color": {
                    _light: "rgba(255, 255, 255, 0.3)";
                    _dark: "rgba(0, 0, 0, 0.3)";
                };
            };
        };
    };
    animated: {
        true: {
            range: {
                "--animate-from": "var(--stripe-size)";
                animation: "bg-position 1s linear infinite";
            };
        };
    };
    size: {
        xs: {
            track: {
                h: "1.5";
            };
        };
        sm: {
            track: {
                h: "2";
            };
        };
        md: {
            track: {
                h: "2.5";
            };
        };
        lg: {
            track: {
                h: "3";
            };
        };
        xl: {
            track: {
                h: "4";
            };
        };
    };
}>;
