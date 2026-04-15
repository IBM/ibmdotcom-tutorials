import { isCSSVar } from '../../render/dom/is-css-var.mjs';
import { transformProps } from '../../render/utils/keys-transform.mjs';
import { resolveElements } from '../../utils/resolve-elements.mjs';
import { MotionValue } from '../../value/index.mjs';
import { MotionValueState } from '../MotionValueState.mjs';
import { buildTransform } from './transform.mjs';

const stateMap = new WeakMap();
function styleEffect(subject, values) {
    const elements = resolveElements(subject);
    const subscriptions = [];
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const state = stateMap.get(element) ?? new MotionValueState();
        stateMap.set(element, state);
        for (const key in values) {
            const value = values[key];
            const remove = addValue(element, state, key, value);
            subscriptions.push(remove);
        }
    }
    return () => {
        for (const cancel of subscriptions)
            cancel();
    };
}
function addValue(element, state, key, value) {
    let render = undefined;
    let computed = undefined;
    if (transformProps.has(key)) {
        if (!state.get("transform")) {
            state.set("transform", new MotionValue("none"), () => {
                element.style.transform = buildTransform(state);
            });
        }
        computed = state.get("transform");
    }
    else if (isCSSVar(key)) {
        render = () => {
            element.style.setProperty(key, state.latest[key]);
        };
    }
    else {
        render = () => {
            element.style[key] = state.latest[key];
        };
    }
    return state.set(key, value, render, computed);
}

export { styleEffect };
