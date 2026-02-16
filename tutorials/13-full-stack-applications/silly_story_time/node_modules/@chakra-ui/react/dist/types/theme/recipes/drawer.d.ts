export declare const drawerSlotRecipe: import("../..").SlotRecipeDefinition<"positioner" | "content" | "closeTrigger" | "title" | "description" | "header" | "body" | "footer" | "trigger" | "backdrop", {
    size: {
        xs: {
            content: {
                maxW: "xs";
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
        full: {
            content: {
                maxW: "100vw";
                h: "100dvh";
            };
        };
    };
    placement: {
        start: {
            positioner: {
                justifyContent: "flex-start";
            };
            content: {
                _open: {
                    animationName: {
                        base: "slide-from-left-full, fade-in";
                        _rtl: "slide-from-right-full, fade-in";
                    };
                };
                _closed: {
                    animationName: {
                        base: "slide-to-left-full, fade-out";
                        _rtl: "slide-to-right-full, fade-out";
                    };
                };
            };
        };
        end: {
            positioner: {
                justifyContent: "flex-end";
            };
            content: {
                _open: {
                    animationName: {
                        base: "slide-from-right-full, fade-in";
                        _rtl: "slide-from-left-full, fade-in";
                    };
                };
                _closed: {
                    animationName: {
                        base: "slide-to-right-full, fade-out";
                        _rtl: "slide-to-right-full, fade-out";
                    };
                };
            };
        };
        top: {
            positioner: {
                alignItems: "flex-start";
            };
            content: {
                maxW: "100%";
                _open: {
                    animationName: "slide-from-top-full, fade-in";
                };
                _closed: {
                    animationName: "slide-to-top-full, fade-out";
                };
            };
        };
        bottom: {
            positioner: {
                alignItems: "flex-end";
            };
            content: {
                maxW: "100%";
                _open: {
                    animationName: "slide-from-bottom-full, fade-in";
                };
                _closed: {
                    animationName: "slide-to-bottom-full, fade-out";
                };
            };
        };
    };
    contained: {
        true: {
            positioner: {
                padding: "4";
            };
            content: {
                borderRadius: "l3";
            };
        };
    };
}>;
