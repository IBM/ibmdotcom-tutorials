"use strict";
import { isString, isFunction } from '../utils/is.js';
import { memo } from '../utils/memo.js';
import { colorMix } from './color-mix.js';
import { mapToJson } from './map-to-json.js';

function normalize(config) {
  return config;
}
function normalizeConfig(config) {
  return Object.fromEntries(
    Object.entries(config).map(([property, propertyConfig]) => {
      return [property, normalize(propertyConfig)];
    })
  );
}
function createUtility(options) {
  const configs = normalizeConfig(options.config);
  const tokens = options.tokens;
  const shorthands = /* @__PURE__ */ new Map();
  const propValues = /* @__PURE__ */ new Map();
  function register(property, config) {
    configs[property] = normalize(config);
    assignProperty(property, config);
  }
  const assignProperty = (property, config) => {
    const values = getPropertyValues(config);
    if (!values) return;
    propValues.set(property, values);
    assignPropertyType(property, config);
  };
  const assignProperties = () => {
    for (const [prop, config] of Object.entries(configs)) {
      if (!config) continue;
      assignProperty(prop, config);
    }
  };
  const assignShorthands = () => {
    for (const [property, config] of Object.entries(configs)) {
      const { shorthand } = config ?? {};
      if (!shorthand) continue;
      const values = Array.isArray(shorthand) ? shorthand : [shorthand];
      values.forEach((name) => shorthands.set(name, property));
    }
  };
  const assignColorPaletteProperty = () => {
    const values = mapToJson(tokens.colorPaletteMap);
    register("colorPalette", {
      values: Object.keys(values),
      transform: memo((value) => values[value])
    });
  };
  const propTypes = /* @__PURE__ */ new Map();
  const assignPropertyType = (property, config) => {
    if (!config) return;
    const values = getPropertyValues(config, (key) => `type:Tokens["${key}"]`);
    if (typeof values === "object" && values.type) {
      propTypes.set(property, /* @__PURE__ */ new Set([`type:${values.type}`]));
      return;
    }
    if (values) {
      const keys2 = new Set(Object.keys(values));
      propTypes.set(property, keys2);
    }
    const set = propTypes.get(property) ?? /* @__PURE__ */ new Set();
    if (config.property) {
      propTypes.set(property, set.add(`CssProperties["${config.property}"]`));
    }
  };
  const assignPropertyTypes = () => {
    for (const [property, propertyConfig] of Object.entries(configs)) {
      if (!propertyConfig) continue;
      assignPropertyType(property, propertyConfig);
    }
  };
  const addPropertyType = (property, type) => {
    const set = propTypes.get(property) ?? /* @__PURE__ */ new Set();
    propTypes.set(property, /* @__PURE__ */ new Set([...set, ...type]));
  };
  const getTypes = () => {
    const map = /* @__PURE__ */ new Map();
    for (const [prop, values] of propTypes.entries()) {
      if (values.size === 0) {
        map.set(prop, ["string"]);
        continue;
      }
      const typeValues = Array.from(values).map((key) => {
        if (key.startsWith("CssProperties")) return key;
        if (key.startsWith("type:")) return key.replace("type:", "");
        return JSON.stringify(key);
      });
      map.set(prop, typeValues);
    }
    return map;
  };
  const getPropertyValues = (config, resolveFn) => {
    const { values } = config;
    const fn = (key) => {
      const value = resolveFn?.(key);
      return value ? { [value]: value } : void 0;
    };
    if (isString(values)) {
      return fn?.(values) ?? tokens.getCategoryValues(values) ?? {};
    }
    if (Array.isArray(values)) {
      return values.reduce((result, value) => {
        result[value] = value;
        return result;
      }, {});
    }
    if (isFunction(values)) {
      return values(resolveFn ? fn : tokens.getCategoryValues);
    }
    return values;
  };
  const defaultTransform = memo((prop, value) => {
    return {
      [prop]: prop.startsWith("--") ? tokens.getVar(value, value) : value
    };
  });
  const tokenFn = Object.assign(tokens.getVar, {
    raw: (path) => tokens.getByName(path)
  });
  const transform = memo((prop, raw) => {
    const key = resolveShorthand(prop);
    if (isString(raw) && !raw.includes("_EMO_")) {
      raw = tokens.expandReferenceInValue(raw);
    }
    const config = configs[key];
    if (!config) {
      return defaultTransform(key, raw);
    }
    const value = propValues.get(key)?.[raw];
    if (!config.transform) {
      return defaultTransform(prop, value ?? raw);
    }
    const _colorMix = (value2) => colorMix(value2, tokenFn);
    return config.transform(value ?? raw, {
      raw,
      token: tokenFn,
      utils: { colorMix: _colorMix }
    });
  });
  function build() {
    assignShorthands();
    assignColorPaletteProperty();
    assignProperties();
    assignPropertyTypes();
  }
  build();
  const hasShorthand = shorthands.size > 0;
  const resolveShorthand = memo((prop) => {
    return shorthands.get(prop) ?? prop;
  });
  const keys = () => {
    return [...Array.from(shorthands.keys()), ...Object.keys(configs)];
  };
  const instance = {
    keys,
    hasShorthand,
    transform,
    shorthands,
    resolveShorthand,
    register,
    getTypes,
    addPropertyType
  };
  return instance;
}

export { createUtility };
