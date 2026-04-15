export declare const dialogSlotRecipe: import("../..").SlotRecipeDefinition<"positioner" | "content" | "closeTrigger" | "title" | "description" | "header" | "body" | "footer" | "trigger" | "backdrop", {
    placement: {
        center: {
            positioner: {
                alignItems: "center";
            };
            content: {
                "--dialog-base-margin": "auto";
                mx: "auto";
            };
        };
        top: {
            positioner: {
                alignItems: "flex-start";
            };
            content: {
                "--dialog-base-margin": "spacing.16";
                mx: "auto";
            };
        };
        bottom: {
            positioner: {
                alignItems: "flex-end";
            };
            content: {
                "--dialog-base-margin": "spacing.16";
                mx: "auto";
            };
        };
    };
    scrollBehavior: {
        inside: {
            positioner: {
                overflow: "hidden";
            };
            content: {
                maxH: "calc(100% - 7.5rem)";
            };
            body: {
                overflow: "auto";
            };
        };
        outside: {
            positioner: {
                overflow: "auto";
                pointerEvents: "auto";
            };
        };
    };
    size: {
        xs: {
            content: {
                maxW: "sm";
            };
        };
        sm: {
            content: {
                maxW: "md";
            };
        };
        md: {
            content: {
                maxW: "lg";
            };
        };
        lg: {
            content: {
                maxW: "2xl";
            };
        };
        xl: {
            content: {
                maxW: "4xl";
            };
        };
        cover: {
            positioner: {
                padding: "10";
            };
            content: {
                width: "100%";
                height: "100%";
                "--dialog-margin": "0";
            };
        };
        full: {
            content: {
                maxW: "100vw";
                minH: "100vh";
                "--dialog-margin": "0";
                borderRadius: "0";
            };
        };
    };
    motionPreset: {
        scale: {
            content: {
                _open: {
                    animationName: "scale-in, fade-in";
                };
                _closed: {
                    animationName: "scale-out, fade-out";
                };
            };
        };
        "slide-in-bottom": {
            content: {
                _open: {
                    animationName: "slide-from-bottom, fade-in";
                };
                _closed: {
                    animationName: "slide-to-bottom, fade-out";
                };
            };
        };
        "slide-in-top": {
            content: {
                _open: {
                    animationName: "slide-from-top, fade-in";
                };
                _closed: {
                    animationName: "slide-to-top, fade-out";
                };
            };
        };
        "slide-in-left": {
            content: {
                _open: {
                    animationName: "slide-from-left, fade-in";
                };
                _closed: {
                    animationName: "slide-to-left, fade-out";
                };
            };
        };
        "slide-in-right": {
            content: {
                _open: {
                    animationName: "slide-from-right, fade-in";
                };
                _closed: {
                    animationName: "slide-to-right, fade-out";
                };
            };
        };
        none: {};
    };
}>;
