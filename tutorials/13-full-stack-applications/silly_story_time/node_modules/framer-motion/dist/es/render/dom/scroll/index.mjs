import { attachToAnimation } from './attach-animation.mjs';
import { attachToFunction } from './attach-function.mjs';

function scroll(onScroll, { axis = "y", container = document.documentElement, ...options } = {}) {
    /**
     * If the container is the document.documentElement and the scrollHeight
     * and clientHeight are the same, we need to use the document.body instead
     * as this is the scrollable document element.
     */
    if (container === document.documentElement &&
        ((axis === "y" && container.scrollHeight === container.clientHeight) ||
            (axis === "x" && container.scrollWidth === container.clientWidth))) {
        container = document.body;
    }
    const optionsWithDefaults = { axis, container, ...options };
    return typeof onScroll === "function"
        ? attachToFunction(onScroll, optionsWithDefaults)
        : attachToAnimation(onScroll, optionsWithDefaults);
}

export { scroll };
