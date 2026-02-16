import * as _internationalized_date from '@internationalized/date';
import { DateValue, DateDuration, DateFormatter, Calendar } from '@internationalized/date';

type DateGranularity = "day" | "hour" | "minute" | "second" | "year" | "month";
type DateAlignment = "start" | "end" | "center";
type DateAvailableFn = (date: DateValue, locale: string) => boolean;
type DateAdjustFn = (options: {
    startDate: DateValue;
    focusedDate: DateValue;
}) => {
    startDate: DateValue;
    focusedDate: DateValue;
    endDate: DateValue;
};
type DateRangePreset = "thisWeek" | "lastWeek" | "thisMonth" | "lastMonth" | "thisQuarter" | "lastQuarter" | "thisYear" | "lastYear" | "last3Days" | "last7Days" | "last14Days" | "last30Days" | "last90Days";

declare function alignDate(date: DateValue, alignment: DateAlignment, duration: DateDuration, locale: string, min?: DateValue | undefined, max?: DateValue | undefined): DateValue;
declare function alignStartDate(date: DateValue, startDate: DateValue, endDate: DateValue, duration: DateDuration, locale: string, min?: DateValue | undefined, max?: DateValue | undefined): DateValue;

declare function isDateEqual(dateA: DateValue, dateB?: DateValue | null): boolean;
declare function isDateUnavailable(date: DateValue | null, isUnavailable: DateAvailableFn | undefined, locale: string, minValue?: DateValue | null, maxValue?: DateValue | null): boolean;
declare function isDateOutsideRange(date: DateValue, startDate?: DateValue | null, endDate?: DateValue | null): boolean;
declare function isPreviousRangeInvalid(startDate: DateValue, minValue?: DateValue | null, maxValue?: DateValue | null): boolean;
declare function isNextRangeInvalid(endDate: DateValue, minValue?: DateValue | null, maxValue?: DateValue | null): boolean;

declare function alignCenter(date: DateValue, duration: DateDuration, locale: string, min?: DateValue, max?: DateValue): DateValue;
declare function alignStart(date: DateValue, duration: DateDuration, locale: string, min?: DateValue, max?: DateValue): DateValue;
declare function alignEnd(date: DateValue, duration: DateDuration, locale: string, min?: DateValue, max?: DateValue): DateValue;
declare function constrainStart(date: DateValue, aligned: DateValue, duration: DateDuration, locale: string, min?: DateValue, max?: DateValue): DateValue;
declare function constrainValue(date: DateValue, minValue?: DateValue, maxValue?: DateValue): DateValue;

declare function getUnitDuration(duration: DateDuration): {
    years?: number;
    months?: number;
    weeks?: number;
    days?: number;
};
declare function getEndDate(startDate: DateValue, duration: DateDuration): _internationalized_date.CalendarDate | _internationalized_date.CalendarDateTime | _internationalized_date.ZonedDateTime;

declare function formatRange(startDate: DateValue, endDate: DateValue, formatter: DateFormatter, toString: (start: string, end: string) => string, timeZone: string): string;
declare function formatSelectedDate(startDate: DateValue, endDate: DateValue | null, locale: string, timeZone: string): string;
declare function formatVisibleRange(startDate: DateValue, endDate: DateValue | null, locale: string, timeZone: string): string;

declare function getDayFormatter(locale: string, timeZone: string): DateFormatter;
declare function getMonthFormatter(locale: string, timeZone: string): DateFormatter;

declare function getStartOfWeek(date: DateValue, locale: string, firstDayOfWeek?: number): DateValue;
declare function getEndOfWeek(date: DateValue, locale: string, firstDayOfWeek?: number): DateValue;
declare function getDaysInWeek(weekIndex: number, from: DateValue, locale: string, firstDayOfWeek?: number): DateValue[];
declare function getMonthDays(from: DateValue, locale: string, numOfWeeks?: number, firstDayOfWeek?: number): DateValue[][];
declare function getWeekdayFormats(locale: string, timeZone: string): <T extends DateValue | Date>(value: T) => {
    value: T;
    short: string;
    long: string;
    narrow: string;
};
declare function getWeekDays(date: DateValue, startOfWeekProp: number | undefined, timeZone: string, locale: string): {
    value: _internationalized_date.CalendarDate | _internationalized_date.CalendarDateTime | _internationalized_date.ZonedDateTime;
    short: string;
    long: string;
    narrow: string;
}[];
declare function getMonthNames(locale: string, format?: Intl.DateTimeFormatOptions["month"]): string[];

interface YearsRange {
    from: number;
    to: number;
}
declare function getYearsRange(range: YearsRange): number[];
declare function normalizeYear(year: string | null | undefined): string | undefined;
declare function getDecadeRange(year: number): number[];

declare function getTodayDate(timeZone?: string): _internationalized_date.CalendarDate;
declare function setCalendar(date: DateValue, calendar: Calendar): _internationalized_date.CalendarDateTime;
declare function setDate(date: DateValue, startDate: DateValue, isDateUnavailable: DateAvailableFn, locale: string, minValue: DateValue, maxValue: DateValue): DateValue | undefined;
declare function getPreviousAvailableDate(date: DateValue, minValue: DateValue, locale: string, isDateUnavailable?: DateAvailableFn): DateValue | undefined;

interface AdjustDateParams {
    startDate: DateValue;
    focusedDate: DateValue;
}
interface AdjustDateReturn extends AdjustDateParams {
    endDate: DateValue;
}
declare function getAdjustedDateFn(visibleDuration: DateDuration, locale: string, minValue?: DateValue, maxValue?: DateValue): (options: AdjustDateParams) => AdjustDateReturn;
declare function getNextPage(focusedDate: DateValue, startDate: DateValue, visibleDuration: DateDuration, locale: string, minValue?: DateValue, maxValue?: DateValue): AdjustDateReturn;
declare function getPreviousPage(focusedDate: DateValue, startDate: DateValue, visibleDuration: DateDuration, locale: string, minValue?: DateValue, maxValue?: DateValue): AdjustDateReturn;
declare function getNextRow(focusedDate: DateValue, startDate: DateValue, visibleDuration: DateDuration, locale: string, minValue?: DateValue, maxValue?: DateValue): AdjustDateReturn | undefined;
declare function getPreviousRow(focusedDate: DateValue, startDate: DateValue, visibleDuration: DateDuration, locale: string, minValue?: DateValue, maxValue?: DateValue): AdjustDateReturn | undefined;
declare function getSectionStart(focusedDate: DateValue, startDate: DateValue, visibleDuration: DateDuration, locale: string, minValue?: DateValue, maxValue?: DateValue): AdjustDateReturn | undefined;
declare function getSectionEnd(focusedDate: DateValue, startDate: DateValue, visibleDuration: DateDuration, locale: string, minValue?: DateValue, maxValue?: DateValue): AdjustDateReturn | undefined;
declare function getNextSection(focusedDate: DateValue, startDate: DateValue, larger: boolean, visibleDuration: DateDuration, locale: string, minValue?: DateValue, maxValue?: DateValue): AdjustDateReturn | undefined;
declare function getPreviousSection(focusedDate: DateValue, startDate: DateValue, larger: boolean, visibleDuration: DateDuration, locale: string, minValue?: DateValue, maxValue?: DateValue): AdjustDateReturn | undefined;

declare function parseDateString(date: string, locale: string, timeZone: string): DateValue | undefined;

declare function getDateRangePreset(preset: DateRangePreset, locale: string, timeZone: string): [DateValue, DateValue];

export { type AdjustDateParams, type AdjustDateReturn, type DateAdjustFn, type DateGranularity, type DateRangePreset, type YearsRange, alignCenter, alignDate, alignEnd, alignStart, alignStartDate, constrainStart, constrainValue, formatRange, formatSelectedDate, formatVisibleRange, getAdjustedDateFn, getDateRangePreset, getDayFormatter, getDaysInWeek, getDecadeRange, getEndDate, getEndOfWeek, getMonthDays, getMonthFormatter, getMonthNames, getNextPage, getNextRow, getNextSection, getPreviousAvailableDate, getPreviousPage, getPreviousRow, getPreviousSection, getSectionEnd, getSectionStart, getStartOfWeek, getTodayDate, getUnitDuration, getWeekDays, getWeekdayFormats, getYearsRange, isDateEqual, isDateOutsideRange, isDateUnavailable, isNextRangeInvalid, isPreviousRangeInvalid, normalizeYear, parseDateString, setCalendar, setDate };
