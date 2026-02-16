import { transformProps, acceleratedValues } from 'motion-dom';
import { camelToDash } from '../../render/dom/utils/camel-to-dash.mjs';

function getWillChangeName(name) {
    if (transformProps.has(name)) {
        return "transform";
    }
    else if (acceleratedValues.has(name)) {
        return camelToDash(name);
    }
}

export { getWillChangeName };
