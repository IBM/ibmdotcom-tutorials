import { getValuePercent, getPercentValue, snapValueToStep, clampValue, toFixedNumber, mod } from '@zag-js/utils';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);

// src/color-format-gradient.ts
var generateRGB_R = (orientation, dir, zValue) => {
  const maskImage = `linear-gradient(to ${orientation[Number(!dir)]}, transparent, #000)`;
  const result = {
    areaStyles: {
      backgroundImage: `linear-gradient(to ${orientation[Number(dir)]},rgb(${zValue},0,0),rgb(${zValue},255,0))`
    },
    areaGradientStyles: {
      backgroundImage: `linear-gradient(to ${orientation[Number(dir)]},rgb(${zValue},0,255),rgb(${zValue},255,255))`,
      WebkitMaskImage: maskImage,
      maskImage
    }
  };
  return result;
};
var generateRGB_G = (orientation, dir, zValue) => {
  const maskImage = `linear-gradient(to ${orientation[Number(!dir)]}, transparent, #000)`;
  const result = {
    areaStyles: {
      backgroundImage: `linear-gradient(to ${orientation[Number(dir)]},rgb(0,${zValue},0),rgb(255,${zValue},0))`
    },
    areaGradientStyles: {
      backgroundImage: `linear-gradient(to ${orientation[Number(dir)]},rgb(0,${zValue},255),rgb(255,${zValue},255))`,
      WebkitMaskImage: maskImage,
      maskImage
    }
  };
  return result;
};
var generateRGB_B = (orientation, dir, zValue) => {
  const maskImage = `linear-gradient(to ${orientation[Number(!dir)]}, transparent, #000)`;
  const result = {
    areaStyles: {
      backgroundImage: `linear-gradient(to ${orientation[Number(dir)]},rgb(0,0,${zValue}),rgb(255,0,${zValue}))`
    },
    areaGradientStyles: {
      backgroundImage: `linear-gradient(to ${orientation[Number(dir)]},rgb(0,255,${zValue}),rgb(255,255,${zValue}))`,
      WebkitMaskImage: maskImage,
      maskImage
    }
  };
  return result;
};
var generateHSL_H = (orientation, dir, zValue) => {
  const result = {
    areaStyles: {},
    areaGradientStyles: {
      background: [
        `linear-gradient(to ${orientation[Number(dir)]}, hsla(0,0%,0%,1) 0%, hsla(0,0%,0%,0) 50%, hsla(0,0%,100%,0) 50%, hsla(0,0%,100%,1) 100%)`,
        `linear-gradient(to ${orientation[Number(!dir)]},hsl(0,0%,50%),hsla(0,0%,50%,0))`,
        `hsl(${zValue}, 100%, 50%)`
      ].join(",")
    }
  };
  return result;
};
var generateHSL_S = (orientation, dir, alphaValue) => {
  const result = {
    areaStyles: {},
    areaGradientStyles: {
      background: [
        `linear-gradient(to ${orientation[Number(!dir)]}, hsla(0,0%,0%,${alphaValue}) 0%, hsla(0,0%,0%,0) 50%, hsla(0,0%,100%,0) 50%, hsla(0,0%,100%,${alphaValue}) 100%)`,
        `linear-gradient(to ${orientation[Number(dir)]},hsla(0,100%,50%,${alphaValue}),hsla(60,100%,50%,${alphaValue}),hsla(120,100%,50%,${alphaValue}),hsla(180,100%,50%,${alphaValue}),hsla(240,100%,50%,${alphaValue}),hsla(300,100%,50%,${alphaValue}),hsla(359,100%,50%,${alphaValue}))`,
        "hsl(0, 0%, 50%)"
      ].join(",")
    }
  };
  return result;
};
var generateHSL_L = (orientation, dir, zValue) => {
  const result = {
    areaStyles: {},
    areaGradientStyles: {
      backgroundImage: [
        `linear-gradient(to ${orientation[Number(!dir)]},hsl(0,0%,${zValue}%),hsla(0,0%,${zValue}%,0))`,
        `linear-gradient(to ${orientation[Number(dir)]},hsl(0,100%,${zValue}%),hsl(60,100%,${zValue}%),hsl(120,100%,${zValue}%),hsl(180,100%,${zValue}%),hsl(240,100%,${zValue}%),hsl(300,100%,${zValue}%),hsl(360,100%,${zValue}%))`
      ].join(",")
    }
  };
  return result;
};
var generateHSB_H = (orientation, dir, zValue) => {
  const result = {
    areaStyles: {},
    areaGradientStyles: {
      background: [
        `linear-gradient(to ${orientation[Number(dir)]},hsl(0,0%,0%),hsla(0,0%,0%,0))`,
        `linear-gradient(to ${orientation[Number(!dir)]},hsl(0,0%,100%),hsla(0,0%,100%,0))`,
        `hsl(${zValue}, 100%, 50%)`
      ].join(",")
    }
  };
  return result;
};
var generateHSB_S = (orientation, dir, alphaValue) => {
  const result = {
    areaStyles: {},
    areaGradientStyles: {
      background: [
        `linear-gradient(to ${orientation[Number(!dir)]},hsla(0,0%,0%,${alphaValue}),hsla(0,0%,0%,0))`,
        `linear-gradient(to ${orientation[Number(dir)]},hsla(0,100%,50%,${alphaValue}),hsla(60,100%,50%,${alphaValue}),hsla(120,100%,50%,${alphaValue}),hsla(180,100%,50%,${alphaValue}),hsla(240,100%,50%,${alphaValue}),hsla(300,100%,50%,${alphaValue}),hsla(359,100%,50%,${alphaValue}))`,
        `linear-gradient(to ${orientation[Number(!dir)]},hsl(0,0%,0%),hsl(0,0%,100%))`
      ].join(",")
    }
  };
  return result;
};
var generateHSB_B = (orientation, dir, alphaValue) => {
  const result = {
    areaStyles: {},
    areaGradientStyles: {
      background: [
        `linear-gradient(to ${orientation[Number(!dir)]},hsla(0,0%,100%,${alphaValue}),hsla(0,0%,100%,0))`,
        `linear-gradient(to ${orientation[Number(dir)]},hsla(0,100%,50%,${alphaValue}),hsla(60,100%,50%,${alphaValue}),hsla(120,100%,50%,${alphaValue}),hsla(180,100%,50%,${alphaValue}),hsla(240,100%,50%,${alphaValue}),hsla(300,100%,50%,${alphaValue}),hsla(359,100%,50%,${alphaValue}))`,
        "#000"
      ].join(",")
    }
  };
  return result;
};

// src/area-gradient.ts
function getColorAreaGradient(color, options) {
  const { xChannel, yChannel, dir: dirProp = "ltr" } = options;
  const { zChannel } = color.getColorAxes({ xChannel, yChannel });
  const zValue = color.getChannelValue(zChannel);
  const { minValue: zMin, maxValue: zMax } = color.getChannelRange(zChannel);
  const orientation = ["top", dirProp === "rtl" ? "left" : "right"];
  let dir = false;
  let background = { areaStyles: {}, areaGradientStyles: {} };
  let alphaValue = (zValue - zMin) / (zMax - zMin);
  let isHSL = color.getFormat() === "hsla";
  switch (zChannel) {
    case "red": {
      dir = xChannel === "green";
      background = generateRGB_R(orientation, dir, zValue);
      break;
    }
    case "green": {
      dir = xChannel === "red";
      background = generateRGB_G(orientation, dir, zValue);
      break;
    }
    case "blue": {
      dir = xChannel === "red";
      background = generateRGB_B(orientation, dir, zValue);
      break;
    }
    case "hue": {
      dir = xChannel !== "saturation";
      if (isHSL) {
        background = generateHSL_H(orientation, dir, zValue);
      } else {
        background = generateHSB_H(orientation, dir, zValue);
      }
      break;
    }
    case "saturation": {
      dir = xChannel === "hue";
      if (isHSL) {
        background = generateHSL_S(orientation, dir, alphaValue);
      } else {
        background = generateHSB_S(orientation, dir, alphaValue);
      }
      break;
    }
    case "brightness": {
      dir = xChannel === "hue";
      background = generateHSB_B(orientation, dir, alphaValue);
      break;
    }
    case "lightness": {
      dir = xChannel === "hue";
      background = generateHSL_L(orientation, dir, zValue);
      break;
    }
  }
  return background;
}
var isEqualObject = (a, b) => {
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  for (let key in a) if (a[key] !== b[key]) return false;
  return true;
};
var Color = class {
  toHexInt() {
    return this.toFormat("rgba").toHexInt();
  }
  getChannelValue(channel) {
    if (channel in this) return this[channel];
    throw new Error("Unsupported color channel: " + channel);
  }
  getChannelValuePercent(channel, valueToCheck) {
    const value = valueToCheck ?? this.getChannelValue(channel);
    const { minValue, maxValue } = this.getChannelRange(channel);
    return getValuePercent(value, minValue, maxValue);
  }
  getChannelPercentValue(channel, percentToCheck) {
    const { minValue, maxValue, step } = this.getChannelRange(channel);
    const percentValue = getPercentValue(percentToCheck, minValue, maxValue, step);
    return snapValueToStep(percentValue, minValue, maxValue, step);
  }
  withChannelValue(channel, value) {
    const { minValue, maxValue } = this.getChannelRange(channel);
    if (channel in this) {
      let clone = this.clone();
      clone[channel] = clampValue(value, minValue, maxValue);
      return clone;
    }
    throw new Error("Unsupported color channel: " + channel);
  }
  getColorAxes(xyChannels) {
    let { xChannel, yChannel } = xyChannels;
    let xCh = xChannel || this.getChannels().find((c) => c !== yChannel);
    let yCh = yChannel || this.getChannels().find((c) => c !== xCh);
    let zCh = this.getChannels().find((c) => c !== xCh && c !== yCh);
    return { xChannel: xCh, yChannel: yCh, zChannel: zCh };
  }
  incrementChannel(channel, stepSize) {
    const { minValue, maxValue, step } = this.getChannelRange(channel);
    const value = snapValueToStep(
      clampValue(this.getChannelValue(channel) + stepSize, minValue, maxValue),
      minValue,
      maxValue,
      step
    );
    return this.withChannelValue(channel, value);
  }
  decrementChannel(channel, stepSize) {
    return this.incrementChannel(channel, -stepSize);
  }
  isEqual(color) {
    const isSame = isEqualObject(this.toJSON(), color.toJSON());
    return isSame && this.getChannelValue("alpha") === color.getChannelValue("alpha");
  }
};
var _RGBColor = class _RGBColor extends Color {
  constructor(red, green, blue, alpha) {
    super();
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }
  static parse(value) {
    let colors = [];
    if (/^#[\da-f]+$/i.test(value) && [4, 5, 7, 9].includes(value.length)) {
      const values = (value.length < 6 ? value.replace(/[^#]/gi, "$&$&") : value).slice(1).split("");
      while (values.length > 0) {
        colors.push(parseInt(values.splice(0, 2).join(""), 16));
      }
      colors[3] = colors[3] !== void 0 ? colors[3] / 255 : void 0;
    }
    const match = value.match(/^rgba?\((.*)\)$/);
    if (match?.[1]) {
      colors = match[1].split(",").map((value2) => Number(value2.trim())).map((num, i) => clampValue(num, 0, i < 3 ? 255 : 1));
    }
    return colors.length < 3 ? void 0 : new _RGBColor(colors[0], colors[1], colors[2], colors[3] ?? 1);
  }
  toString(format) {
    switch (format) {
      case "hex":
        return "#" + (this.red.toString(16).padStart(2, "0") + this.green.toString(16).padStart(2, "0") + this.blue.toString(16).padStart(2, "0")).toUpperCase();
      case "hexa":
        return "#" + (this.red.toString(16).padStart(2, "0") + this.green.toString(16).padStart(2, "0") + this.blue.toString(16).padStart(2, "0") + Math.round(this.alpha * 255).toString(16).padStart(2, "0")).toUpperCase();
      case "rgb":
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
      case "css":
      case "rgba":
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
      case "hsl":
        return this.toHSL().toString("hsl");
      case "hsb":
        return this.toHSB().toString("hsb");
      default:
        return this.toFormat(format).toString(format);
    }
  }
  toFormat(format) {
    switch (format) {
      case "rgba":
        return this;
      case "hsba":
        return this.toHSB();
      case "hsla":
        return this.toHSL();
      default:
        throw new Error("Unsupported color conversion: rgb -> " + format);
    }
  }
  toHexInt() {
    return this.red << 16 | this.green << 8 | this.blue;
  }
  /**
   * Converts an RGB color value to HSB.
   * Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB.
   * @returns An HSBColor object.
   */
  toHSB() {
    const red = this.red / 255;
    const green = this.green / 255;
    const blue = this.blue / 255;
    const min = Math.min(red, green, blue);
    const brightness = Math.max(red, green, blue);
    const chroma = brightness - min;
    const saturation = brightness === 0 ? 0 : chroma / brightness;
    let hue = 0;
    if (chroma !== 0) {
      switch (brightness) {
        case red:
          hue = (green - blue) / chroma + (green < blue ? 6 : 0);
          break;
        case green:
          hue = (blue - red) / chroma + 2;
          break;
        case blue:
          hue = (red - green) / chroma + 4;
          break;
      }
      hue /= 6;
    }
    return new HSBColor(
      toFixedNumber(hue * 360, 2),
      toFixedNumber(saturation * 100, 2),
      toFixedNumber(brightness * 100, 2),
      toFixedNumber(this.alpha, 2)
    );
  }
  /**
   * Converts an RGB color value to HSL.
   * Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB.
   * @returns An HSLColor object.
   */
  toHSL() {
    const red = this.red / 255;
    const green = this.green / 255;
    const blue = this.blue / 255;
    const min = Math.min(red, green, blue);
    const max = Math.max(red, green, blue);
    const lightness = (max + min) / 2;
    const chroma = max - min;
    let hue = -1;
    let saturation = -1;
    if (chroma === 0) {
      hue = saturation = 0;
    } else {
      saturation = chroma / (lightness < 0.5 ? max + min : 2 - max - min);
      switch (max) {
        case red:
          hue = (green - blue) / chroma + (green < blue ? 6 : 0);
          break;
        case green:
          hue = (blue - red) / chroma + 2;
          break;
        case blue:
          hue = (red - green) / chroma + 4;
          break;
      }
      hue /= 6;
    }
    return new HSLColor(
      toFixedNumber(hue * 360, 2),
      toFixedNumber(saturation * 100, 2),
      toFixedNumber(lightness * 100, 2),
      toFixedNumber(this.alpha, 2)
    );
  }
  clone() {
    return new _RGBColor(this.red, this.green, this.blue, this.alpha);
  }
  getChannelFormatOptions(channel) {
    switch (channel) {
      case "red":
      case "green":
      case "blue":
        return { style: "decimal" };
      case "alpha":
        return { style: "percent" };
      default:
        throw new Error("Unknown color channel: " + channel);
    }
  }
  formatChannelValue(channel, locale) {
    let options = this.getChannelFormatOptions(channel);
    let value = this.getChannelValue(channel);
    return new Intl.NumberFormat(locale, options).format(value);
  }
  getChannelRange(channel) {
    switch (channel) {
      case "red":
      case "green":
      case "blue":
        return { minValue: 0, maxValue: 255, step: 1, pageSize: 17 };
      case "alpha":
        return { minValue: 0, maxValue: 1, step: 0.01, pageSize: 0.1 };
      default:
        throw new Error("Unknown color channel: " + channel);
    }
  }
  toJSON() {
    return { r: this.red, g: this.green, b: this.blue, a: this.alpha };
  }
  getFormat() {
    return "rgba";
  }
  getChannels() {
    return _RGBColor.colorChannels;
  }
};
__publicField(_RGBColor, "colorChannels", ["red", "green", "blue"]);
var RGBColor = _RGBColor;

// src/hsl-color.ts
var HSL_REGEX = /hsl\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsla\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/;
var _HSLColor = class _HSLColor extends Color {
  constructor(hue, saturation, lightness, alpha) {
    super();
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
    this.alpha = alpha;
  }
  static parse(value) {
    let m;
    if (m = value.match(HSL_REGEX)) {
      const [h, s, l, a] = (m[1] ?? m[2]).split(",").map((n) => Number(n.trim().replace("%", "")));
      return new _HSLColor(mod(h, 360), clampValue(s, 0, 100), clampValue(l, 0, 100), clampValue(a ?? 1, 0, 1));
    }
  }
  toString(format) {
    switch (format) {
      case "hex":
        return this.toRGB().toString("hex");
      case "hexa":
        return this.toRGB().toString("hexa");
      case "hsl":
        return `hsl(${this.hue}, ${toFixedNumber(this.saturation, 2)}%, ${toFixedNumber(this.lightness, 2)}%)`;
      case "css":
      case "hsla":
        return `hsla(${this.hue}, ${toFixedNumber(this.saturation, 2)}%, ${toFixedNumber(this.lightness, 2)}%, ${this.alpha})`;
      case "hsb":
        return this.toHSB().toString("hsb");
      case "rgb":
        return this.toRGB().toString("rgb");
      default:
        return this.toFormat(format).toString(format);
    }
  }
  toFormat(format) {
    switch (format) {
      case "hsla":
        return this;
      case "hsba":
        return this.toHSB();
      case "rgba":
        return this.toRGB();
      default:
        throw new Error("Unsupported color conversion: hsl -> " + format);
    }
  }
  /**
   * Converts a HSL color to HSB.
   * Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_HSV.
   * @returns An HSBColor object.
   */
  toHSB() {
    let saturation = this.saturation / 100;
    let lightness = this.lightness / 100;
    let brightness = lightness + saturation * Math.min(lightness, 1 - lightness);
    saturation = brightness === 0 ? 0 : 2 * (1 - lightness / brightness);
    return new HSBColor(
      toFixedNumber(this.hue, 2),
      toFixedNumber(saturation * 100, 2),
      toFixedNumber(brightness * 100, 2),
      toFixedNumber(this.alpha, 2)
    );
  }
  /**
   * Converts a HSL color to RGB.
   * Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative.
   * @returns An RGBColor object.
   */
  toRGB() {
    let hue = this.hue;
    let saturation = this.saturation / 100;
    let lightness = this.lightness / 100;
    let a = saturation * Math.min(lightness, 1 - lightness);
    let fn = (n, k = (n + hue / 30) % 12) => lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return new RGBColor(
      Math.round(fn(0) * 255),
      Math.round(fn(8) * 255),
      Math.round(fn(4) * 255),
      toFixedNumber(this.alpha, 2)
    );
  }
  clone() {
    return new _HSLColor(this.hue, this.saturation, this.lightness, this.alpha);
  }
  getChannelFormatOptions(channel) {
    switch (channel) {
      case "hue":
        return { style: "unit", unit: "degree", unitDisplay: "narrow" };
      case "saturation":
      case "lightness":
      case "alpha":
        return { style: "percent" };
      default:
        throw new Error("Unknown color channel: " + channel);
    }
  }
  formatChannelValue(channel, locale) {
    let options = this.getChannelFormatOptions(channel);
    let value = this.getChannelValue(channel);
    if (channel === "saturation" || channel === "lightness") {
      value /= 100;
    }
    return new Intl.NumberFormat(locale, options).format(value);
  }
  getChannelRange(channel) {
    switch (channel) {
      case "hue":
        return { minValue: 0, maxValue: 360, step: 1, pageSize: 15 };
      case "saturation":
      case "lightness":
        return { minValue: 0, maxValue: 100, step: 1, pageSize: 10 };
      case "alpha":
        return { minValue: 0, maxValue: 1, step: 0.01, pageSize: 0.1 };
      default:
        throw new Error("Unknown color channel: " + channel);
    }
  }
  toJSON() {
    return { h: this.hue, s: this.saturation, l: this.lightness, a: this.alpha };
  }
  getFormat() {
    return "hsla";
  }
  getChannels() {
    return _HSLColor.colorChannels;
  }
};
__publicField(_HSLColor, "colorChannels", ["hue", "saturation", "lightness"]);
var HSLColor = _HSLColor;

// src/hsb-color.ts
var HSB_REGEX = /hsb\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsba\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/;
var _HSBColor = class _HSBColor extends Color {
  constructor(hue, saturation, brightness, alpha) {
    super();
    this.hue = hue;
    this.saturation = saturation;
    this.brightness = brightness;
    this.alpha = alpha;
  }
  static parse(value) {
    let m;
    if (m = value.match(HSB_REGEX)) {
      const [h, s, b, a] = (m[1] ?? m[2]).split(",").map((n) => Number(n.trim().replace("%", "")));
      return new _HSBColor(mod(h, 360), clampValue(s, 0, 100), clampValue(b, 0, 100), clampValue(a ?? 1, 0, 1));
    }
  }
  toString(format) {
    switch (format) {
      case "css":
        return this.toHSL().toString("css");
      case "hex":
        return this.toRGB().toString("hex");
      case "hexa":
        return this.toRGB().toString("hexa");
      case "hsb":
        return `hsb(${this.hue}, ${toFixedNumber(this.saturation, 2)}%, ${toFixedNumber(this.brightness, 2)}%)`;
      case "hsba":
        return `hsba(${this.hue}, ${toFixedNumber(this.saturation, 2)}%, ${toFixedNumber(this.brightness, 2)}%, ${this.alpha})`;
      case "hsl":
        return this.toHSL().toString("hsl");
      case "rgb":
        return this.toRGB().toString("rgb");
      default:
        return this.toFormat(format).toString(format);
    }
  }
  toFormat(format) {
    switch (format) {
      case "hsba":
        return this;
      case "hsla":
        return this.toHSL();
      case "rgba":
        return this.toRGB();
      default:
        throw new Error("Unsupported color conversion: hsb -> " + format);
    }
  }
  /**
   * Converts a HSB color to HSL.
   * Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSV_to_HSL.
   * @returns An HSLColor object.
   */
  toHSL() {
    let saturation = this.saturation / 100;
    let brightness = this.brightness / 100;
    let lightness = brightness * (1 - saturation / 2);
    saturation = lightness === 0 || lightness === 1 ? 0 : (brightness - lightness) / Math.min(lightness, 1 - lightness);
    return new HSLColor(
      toFixedNumber(this.hue, 2),
      toFixedNumber(saturation * 100, 2),
      toFixedNumber(lightness * 100, 2),
      toFixedNumber(this.alpha, 2)
    );
  }
  /**
   * Converts a HSV color value to RGB.
   * Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSV_to_RGB_alternative.
   * @returns An RGBColor object.
   */
  toRGB() {
    let hue = this.hue;
    let saturation = this.saturation / 100;
    let brightness = this.brightness / 100;
    let fn = (n, k = (n + hue / 60) % 6) => brightness - saturation * brightness * Math.max(Math.min(k, 4 - k, 1), 0);
    return new RGBColor(
      Math.round(fn(5) * 255),
      Math.round(fn(3) * 255),
      Math.round(fn(1) * 255),
      toFixedNumber(this.alpha, 2)
    );
  }
  clone() {
    return new _HSBColor(this.hue, this.saturation, this.brightness, this.alpha);
  }
  getChannelFormatOptions(channel) {
    switch (channel) {
      case "hue":
        return { style: "unit", unit: "degree", unitDisplay: "narrow" };
      case "saturation":
      case "brightness":
      case "alpha":
        return { style: "percent" };
      default:
        throw new Error("Unknown color channel: " + channel);
    }
  }
  formatChannelValue(channel, locale) {
    let options = this.getChannelFormatOptions(channel);
    let value = this.getChannelValue(channel);
    if (channel === "saturation" || channel === "brightness") {
      value /= 100;
    }
    return new Intl.NumberFormat(locale, options).format(value);
  }
  getChannelRange(channel) {
    switch (channel) {
      case "hue":
        return { minValue: 0, maxValue: 360, step: 1, pageSize: 15 };
      case "saturation":
      case "brightness":
        return { minValue: 0, maxValue: 100, step: 1, pageSize: 10 };
      case "alpha":
        return { minValue: 0, maxValue: 1, step: 0.01, pageSize: 0.1 };
      default:
        throw new Error("Unknown color channel: " + channel);
    }
  }
  toJSON() {
    return { h: this.hue, s: this.saturation, b: this.brightness, a: this.alpha };
  }
  getFormat() {
    return "hsba";
  }
  getChannels() {
    return _HSBColor.colorChannels;
  }
};
__publicField(_HSBColor, "colorChannels", ["hue", "saturation", "brightness"]);
var HSBColor = _HSBColor;

// src/native-color.ts
var nativeColors = "aliceblue:f0f8ff,antiquewhite:faebd7,aqua:00ffff,aquamarine:7fffd4,azure:f0ffff,beige:f5f5dc,bisque:ffe4c4,black:000000,blanchedalmond:ffebcd,blue:0000ff,blueviolet:8a2be2,brown:a52a2a,burlywood:deb887,cadetblue:5f9ea0,chartreuse:7fff00,chocolate:d2691e,coral:ff7f50,cornflowerblue:6495ed,cornsilk:fff8dc,crimson:dc143c,cyan:00ffff,darkblue:00008b,darkcyan:008b8b,darkgoldenrod:b8860b,darkgray:a9a9a9,darkgreen:006400,darkkhaki:bdb76b,darkmagenta:8b008b,darkolivegreen:556b2f,darkorange:ff8c00,darkorchid:9932cc,darkred:8b0000,darksalmon:e9967a,darkseagreen:8fbc8f,darkslateblue:483d8b,darkslategray:2f4f4f,darkturquoise:00ced1,darkviolet:9400d3,deeppink:ff1493,deepskyblue:00bfff,dimgray:696969,dodgerblue:1e90ff,firebrick:b22222,floralwhite:fffaf0,forestgreen:228b22,fuchsia:ff00ff,gainsboro:dcdcdc,ghostwhite:f8f8ff,gold:ffd700,goldenrod:daa520,gray:808080,green:008000,greenyellow:adff2f,honeydew:f0fff0,hotpink:ff69b4,indianred:cd5c5c,indigo:4b0082,ivory:fffff0,khaki:f0e68c,lavender:e6e6fa,lavenderblush:fff0f5,lawngreen:7cfc00,lemonchiffon:fffacd,lightblue:add8e6,lightcoral:f08080,lightcyan:e0ffff,lightgoldenrodyellow:fafad2,lightgrey:d3d3d3,lightgreen:90ee90,lightpink:ffb6c1,lightsalmon:ffa07a,lightseagreen:20b2aa,lightskyblue:87cefa,lightslategray:778899,lightsteelblue:b0c4de,lightyellow:ffffe0,lime:00ff00,limegreen:32cd32,linen:faf0e6,magenta:ff00ff,maroon:800000,mediumaquamarine:66cdaa,mediumblue:0000cd,mediumorchid:ba55d3,mediumpurple:9370d8,mediumseagreen:3cb371,mediumslateblue:7b68ee,mediumspringgreen:00fa9a,mediumturquoise:48d1cc,mediumvioletred:c71585,midnightblue:191970,mintcream:f5fffa,mistyrose:ffe4e1,moccasin:ffe4b5,navajowhite:ffdead,navy:000080,oldlace:fdf5e6,olive:808000,olivedrab:6b8e23,orange:ffa500,orangered:ff4500,orchid:da70d6,palegoldenrod:eee8aa,palegreen:98fb98,paleturquoise:afeeee,palevioletred:d87093,papayawhip:ffefd5,peachpuff:ffdab9,peru:cd853f,pink:ffc0cb,plum:dda0dd,powderblue:b0e0e6,purple:800080,rebeccapurple:663399,red:ff0000,rosybrown:bc8f8f,royalblue:4169e1,saddlebrown:8b4513,salmon:fa8072,sandybrown:f4a460,seagreen:2e8b57,seashell:fff5ee,sienna:a0522d,silver:c0c0c0,skyblue:87ceeb,slateblue:6a5acd,slategray:708090,snow:fffafa,springgreen:00ff7f,steelblue:4682b4,tan:d2b48c,teal:008080,thistle:d8bfd8,tomato:ff6347,turquoise:40e0d0,violet:ee82ee,wheat:f5deb3,white:ffffff,whitesmoke:f5f5f5,yellow:ffff00,yellowgreen:9acd32";
var makeMap = (str) => {
  const map = /* @__PURE__ */ new Map();
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    const [key, val] = list[i].split(":");
    map.set(key, `#${val}`);
    if (key.includes("gray")) map.set(key.replace("gray", "grey"), `#${val}`);
  }
  return map;
};
var nativeColorMap = makeMap(nativeColors);

// src/parse-color.ts
var parseColor = (value) => {
  if (nativeColorMap.has(value)) {
    return parseColor(nativeColorMap.get(value));
  }
  const result = RGBColor.parse(value) || HSBColor.parse(value) || HSLColor.parse(value);
  if (!result) {
    const error = new Error("Invalid color value: " + value);
    Error.captureStackTrace?.(error, parseColor);
    throw error;
  }
  return result;
};
var normalizeColor = (v) => {
  return typeof v === "string" ? parseColor(v) : v;
};

export { Color, getColorAreaGradient, normalizeColor, parseColor };
