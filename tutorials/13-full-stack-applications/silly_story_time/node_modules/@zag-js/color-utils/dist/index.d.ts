type ColorHexFormat = "hex" | "hexa";
type ColorFormat = "rgba" | "hsla" | "hsba";
type ColorStringFormat = ColorHexFormat | ColorFormat | "rgb" | "hsl" | "hsb" | "css";
type ColorChannel = "hue" | "saturation" | "brightness" | "lightness" | "red" | "green" | "blue" | "alpha";
interface Color2DAxes {
    xChannel: ColorChannel;
    yChannel: ColorChannel;
}
interface ColorAxes extends Color2DAxes {
    zChannel: ColorChannel;
}
interface ColorChannelRange {
    /** The minimum value of the color channel. */
    minValue: number;
    /** The maximum value of the color channel. */
    maxValue: number;
    /** The step value of the color channel, used when incrementing and decrementing. */
    step: number;
    /** The page step value of the color channel, used when incrementing and decrementing. */
    pageSize: number;
}
interface ColorType {
    /** Converts the color to the given color format, and returns a new Color object. */
    toFormat(format: ColorFormat): ColorType;
    /** Converts the color to a JSON object. */
    toJSON(): Record<string, number>;
    /** Converts the color to a string in the given format. */
    toString(format: ColorStringFormat): string;
    /** Converts the color to hex, and returns an integer representation. */
    toHexInt(): number;
    /**
     * Returns the numeric value for a given channel.
     * Throws an error if the channel is unsupported in the current color format.
     */
    getChannelValue(channel: ColorChannel): number;
    /**
     * Sets the numeric value for a given channel, and returns a new Color object.
     * Throws an error if the channel is unsupported in the current color format.
     */
    withChannelValue(channel: ColorChannel, value: number): ColorType;
    /**
     * Returns the formatted value for a given channel.
     */
    formatChannelValue(channel: ColorChannel, locale: string): string;
    /**
     * Returns the minimum, maximum, and step values for a given channel.
     */
    getChannelRange(channel: ColorChannel): ColorChannelRange;
    /**
     * Returns the color space, 'rgb', 'hsb' or 'hsl', for the current color.
     */
    getFormat(): ColorFormat;
    /**
     * Returns the color space axes, xChannel, yChannel, zChannel.
     */
    getColorAxes(xyChannels: Color2DAxes): ColorAxes;
    /**
     * Returns an array of the color channels within the current color space space.
     */
    getChannels(): [ColorChannel, ColorChannel, ColorChannel];
    /**
     * Returns a new Color object with the same values as the current color.
     */
    clone(): ColorType;
    /**
     * Whether the color is equal to another color.
     */
    isEqual(color: ColorType): boolean;
    /**
     * Increments the color channel by the given step size, and returns a new Color object.
     */
    incrementChannel(channel: ColorChannel, stepSize: number): ColorType;
    /**
     * Decrements the color channel by the given step size, and returns a new Color object.
     */
    decrementChannel(channel: ColorChannel, stepSize: number): ColorType;
    /**
     * Returns the color channel value as a percentage of the channel range.
     */
    getChannelValuePercent(channel: ColorChannel, value?: number): number;
    /**
     * Returns the color channel value for a given percentage of the channel range.
     */
    getChannelPercentValue(channel: ColorChannel, percent: number): number;
}

declare abstract class Color implements ColorType {
    abstract toFormat(format: ColorFormat): ColorType;
    abstract toJSON(): Record<string, number>;
    abstract toString(format: ColorStringFormat): string;
    abstract clone(): ColorType;
    abstract getChannelRange(channel: ColorChannel): ColorChannelRange;
    abstract getFormat(): ColorFormat;
    abstract getChannels(): [ColorChannel, ColorChannel, ColorChannel];
    abstract formatChannelValue(channel: ColorChannel, locale: string): string;
    toHexInt(): number;
    getChannelValue(channel: ColorChannel): number;
    getChannelValuePercent(channel: ColorChannel, valueToCheck?: number): number;
    getChannelPercentValue(channel: ColorChannel, percentToCheck: number): number;
    withChannelValue(channel: ColorChannel, value: number): ColorType;
    getColorAxes(xyChannels: Color2DAxes): ColorAxes;
    incrementChannel(channel: ColorChannel, stepSize: number): ColorType;
    decrementChannel(channel: ColorChannel, stepSize: number): ColorType;
    isEqual(color: ColorType): boolean;
}

interface GradientOptions {
    xChannel: ColorChannel;
    yChannel: ColorChannel;
    dir?: "rtl" | "ltr" | undefined;
}
interface GradientStyles {
    areaStyles: Record<string, string>;
    areaGradientStyles: Record<string, string>;
}
declare function getColorAreaGradient(color: Color, options: GradientOptions): GradientStyles;

declare const parseColor: (value: string) => ColorType;
declare const normalizeColor: (v: string | ColorType) => ColorType;

export { Color, type ColorAxes, type ColorChannel, type ColorChannelRange, type ColorFormat, type ColorStringFormat, type ColorType, getColorAreaGradient, normalizeColor, parseColor };
