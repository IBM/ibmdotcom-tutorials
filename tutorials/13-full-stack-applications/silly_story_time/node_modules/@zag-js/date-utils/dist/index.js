'use strict';

var date = require('@internationalized/date');

// src/constrain.ts
function alignCenter(date, duration, locale, min, max) {
  const halfDuration = {};
  for (let prop in duration) {
    const key = prop;
    const value = duration[key];
    if (value == null) continue;
    halfDuration[key] = Math.floor(value / 2);
    if (halfDuration[key] > 0 && value % 2 === 0) {
      halfDuration[key]--;
    }
  }
  const aligned = alignStart(date, duration, locale).subtract(halfDuration);
  return constrainStart(date, aligned, duration, locale, min, max);
}
function alignStart(date$1, duration, locale, min, max) {
  let aligned = date$1;
  if (duration.years) {
    aligned = date.startOfYear(date$1);
  } else if (duration.months) {
    aligned = date.startOfMonth(date$1);
  } else if (duration.weeks) {
    aligned = date.startOfWeek(date$1, locale);
  }
  return constrainStart(date$1, aligned, duration, locale, min, max);
}
function alignEnd(date, duration, locale, min, max) {
  let d = { ...duration };
  if (d.days) {
    d.days--;
  } else if (d.weeks) {
    d.weeks--;
  } else if (d.months) {
    d.months--;
  } else if (d.years) {
    d.years--;
  }
  let aligned = alignStart(date, duration, locale).subtract(d);
  return constrainStart(date, aligned, duration, locale, min, max);
}
function constrainStart(date$1, aligned, duration, locale, min, max) {
  if (min && date$1.compare(min) >= 0) {
    aligned = date.maxDate(aligned, alignStart(date.toCalendarDate(min), duration, locale));
  }
  if (max && date$1.compare(max) <= 0) {
    aligned = date.minDate(aligned, alignEnd(date.toCalendarDate(max), duration, locale));
  }
  return aligned;
}
function constrainValue(date$1, minValue, maxValue) {
  if (minValue) {
    date$1 = date.maxDate(date$1, date.toCalendarDate(minValue));
  }
  if (maxValue) {
    date$1 = date.minDate(date$1, date.toCalendarDate(maxValue));
  }
  return date$1;
}

// src/align.ts
function alignDate(date, alignment, duration, locale, min, max) {
  switch (alignment) {
    case "start":
      return alignStart(date, duration, locale, min, max);
    case "end":
      return alignEnd(date, duration, locale, min, max);
    case "center":
    default:
      return alignCenter(date, duration, locale, min, max);
  }
}
function alignStartDate(date, startDate, endDate, duration, locale, min, max) {
  if (date.compare(startDate) < 0) {
    return alignEnd(date, duration, locale, min, max);
  }
  if (date.compare(endDate) > 0) {
    return alignStart(date, duration, locale, min, max);
  }
  return startDate;
}
function isDateEqual(dateA, dateB) {
  return dateB != null && date.isSameDay(dateA, dateB);
}
function isDateUnavailable(date, isUnavailable, locale, minValue, maxValue) {
  if (!date) return false;
  if (isUnavailable?.(date, locale)) return true;
  return isDateOutsideRange(date, minValue, maxValue);
}
function isDateOutsideRange(date, startDate, endDate) {
  return startDate != null && date.compare(startDate) < 0 || endDate != null && date.compare(endDate) > 0;
}
function isPreviousRangeInvalid(startDate, minValue, maxValue) {
  const prevDate = startDate.subtract({ days: 1 });
  return date.isSameDay(prevDate, startDate) || isDateOutsideRange(prevDate, minValue, maxValue);
}
function isNextRangeInvalid(endDate, minValue, maxValue) {
  const nextDate = endDate.add({ days: 1 });
  return date.isSameDay(nextDate, endDate) || isDateOutsideRange(nextDate, minValue, maxValue);
}

// src/duration.ts
function getUnitDuration(duration) {
  let clone = { ...duration };
  for (let key in clone) clone[key] = 1;
  return clone;
}
function getEndDate(startDate, duration) {
  let clone = { ...duration };
  if (clone.days) clone.days--;
  else clone.days = -1;
  return startDate.add(clone);
}

// src/get-era-format.ts
function getEraFormat(date) {
  return date?.calendar.identifier === "gregory" && date.era === "BC" ? "short" : void 0;
}

// src/formatter.ts
function getDayFormatter(locale, timeZone) {
  const date$1 = date.toCalendarDateTime(date.today(timeZone));
  return new date.DateFormatter(locale, {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
    era: getEraFormat(date$1),
    timeZone
  });
}
function getMonthFormatter(locale, timeZone) {
  const date$1 = date.toCalendarDate(date.today(timeZone));
  return new date.DateFormatter(locale, {
    month: "long",
    year: "numeric",
    era: getEraFormat(date$1),
    calendar: date$1?.calendar.identifier,
    timeZone
  });
}

// src/format.ts
function formatRange(startDate, endDate, formatter, toString, timeZone) {
  let parts = formatter.formatRangeToParts(startDate.toDate(timeZone), endDate.toDate(timeZone));
  let separatorIndex = -1;
  for (let i = 0; i < parts.length; i++) {
    let part = parts[i];
    if (part.source === "shared" && part.type === "literal") {
      separatorIndex = i;
    } else if (part.source === "endRange") {
      break;
    }
  }
  let start = "";
  let end = "";
  for (let i = 0; i < parts.length; i++) {
    if (i < separatorIndex) {
      start += parts[i].value;
    } else if (i > separatorIndex) {
      end += parts[i].value;
    }
  }
  return toString(start, end);
}
function formatSelectedDate(startDate, endDate, locale, timeZone) {
  let start = startDate;
  let end = endDate ?? startDate;
  let formatter = getDayFormatter(locale, timeZone);
  if (date.isSameDay(start, end)) {
    return formatter.format(start.toDate(timeZone));
  }
  return formatRange(start, end, formatter, (start2, end2) => `${start2} \u2013 ${end2}`, timeZone);
}
function formatVisibleRange(startDate, endDate, locale, timeZone) {
  const start = startDate;
  const end = endDate ?? startDate;
  const dayFormatter = getDayFormatter(locale, timeZone);
  if (!date.isSameDay(start, date.startOfMonth(start))) {
    return dayFormatter.formatRange(start.toDate(timeZone), end.toDate(timeZone));
  }
  const monthFormatter = getMonthFormatter(locale, timeZone);
  if (date.isSameDay(end, date.endOfMonth(start))) {
    return monthFormatter.format(start.toDate(timeZone));
  }
  if (date.isSameDay(end, date.endOfMonth(end))) {
    return monthFormatter.formatRange(start.toDate(timeZone), end.toDate(timeZone));
  }
  return "";
}
var daysOfTheWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function normalizeFirstDayOfWeek(firstDayOfWeek) {
  return firstDayOfWeek != null ? daysOfTheWeek[firstDayOfWeek] : void 0;
}
function getStartOfWeek(date$1, locale, firstDayOfWeek) {
  const firstDay = normalizeFirstDayOfWeek(firstDayOfWeek);
  return date.startOfWeek(date$1, locale, firstDay);
}
function getEndOfWeek(date$1, locale, firstDayOfWeek = 0) {
  const firstDay = normalizeFirstDayOfWeek(firstDayOfWeek);
  return date.endOfWeek(date$1, locale, firstDay);
}
function getDaysInWeek(weekIndex, from, locale, firstDayOfWeek) {
  const weekDate = from.add({ weeks: weekIndex });
  const dates = [];
  let date$1 = getStartOfWeek(weekDate, locale, firstDayOfWeek);
  while (dates.length < 7) {
    dates.push(date$1);
    let nextDate = date$1.add({ days: 1 });
    if (date.isSameDay(date$1, nextDate)) break;
    date$1 = nextDate;
  }
  return dates;
}
function getMonthDays(from, locale, numOfWeeks, firstDayOfWeek) {
  const firstDay = normalizeFirstDayOfWeek(firstDayOfWeek);
  const monthWeeks = numOfWeeks ?? date.getWeeksInMonth(from, locale, firstDay);
  const weeks = [...new Array(monthWeeks).keys()];
  return weeks.map((week) => getDaysInWeek(week, from, locale, firstDayOfWeek));
}
function getWeekdayFormats(locale, timeZone) {
  const longFormat = new date.DateFormatter(locale, { weekday: "long", timeZone });
  const shortFormat = new date.DateFormatter(locale, { weekday: "short", timeZone });
  const narrowFormat = new date.DateFormatter(locale, { weekday: "narrow", timeZone });
  return (value) => {
    const date = value instanceof Date ? value : value.toDate(timeZone);
    return {
      value,
      short: shortFormat.format(date),
      long: longFormat.format(date),
      narrow: narrowFormat.format(date)
    };
  };
}
function getWeekDays(date, startOfWeekProp, timeZone, locale) {
  const firstDayOfWeek = getStartOfWeek(date, locale, startOfWeekProp);
  const weeks = [...new Array(7).keys()];
  const format = getWeekdayFormats(locale, timeZone);
  return weeks.map((index) => format(firstDayOfWeek.add({ days: index })));
}
function getMonthNames(locale, format = "long") {
  const date = new Date(2021, 0, 1);
  const monthNames = [];
  for (let i = 0; i < 12; i++) {
    monthNames.push(date.toLocaleString(locale, { month: format }));
    date.setMonth(date.getMonth() + 1);
  }
  return monthNames;
}

// src/date-year.ts
function getYearsRange(range) {
  const years = [];
  for (let year = range.from; year <= range.to; year += 1) years.push(year);
  return years;
}
var FUTURE_YEAR_COERCION = 10;
function normalizeYear(year) {
  if (!year) return;
  if (year.length === 3) return year.padEnd(4, "0");
  if (year.length === 2) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const currentCentury = Math.floor(currentYear / 100) * 100;
    const twoDigitYear = parseInt(year.slice(-2), 10);
    const fullYear = currentCentury + twoDigitYear;
    return fullYear > currentYear + FUTURE_YEAR_COERCION ? (fullYear - 100).toString() : fullYear.toString();
  }
  return year;
}
function getDecadeRange(year) {
  const computedYear = year - year % 10 - 1;
  const years = [];
  for (let i = 0; i < 12; i += 1) {
    const value = computedYear + i;
    years.push(value);
  }
  return years;
}
function getTodayDate(timeZone) {
  return date.today(timeZone ?? date.getLocalTimeZone());
}
function setCalendar(date$1, calendar) {
  return date.toCalendar(date.toCalendarDateTime(date$1), calendar);
}
function setDate(date, startDate, isDateUnavailable2, locale, minValue, maxValue) {
  let result;
  result = constrainValue(date, minValue, maxValue);
  result = getPreviousAvailableDate(date, startDate, locale, isDateUnavailable2);
  return result;
}
function getPreviousAvailableDate(date, minValue, locale, isDateUnavailable2) {
  if (!isDateUnavailable2) {
    return date;
  }
  while (date.compare(minValue) >= 0 && isDateUnavailable2(date, locale)) {
    date = date.subtract({ days: 1 });
  }
  if (date.compare(minValue) >= 0) {
    return date;
  }
}
function getAdjustedDateFn(visibleDuration, locale, minValue, maxValue) {
  return function getDate(options) {
    const { startDate, focusedDate } = options;
    const endDate = getEndDate(startDate, visibleDuration);
    if (isDateOutsideRange(focusedDate, minValue, maxValue)) {
      return {
        startDate,
        focusedDate: constrainValue(focusedDate, minValue, maxValue),
        endDate
      };
    }
    if (focusedDate.compare(startDate) < 0) {
      return {
        startDate: alignEnd(focusedDate, visibleDuration, locale, minValue, maxValue),
        focusedDate: constrainValue(focusedDate, minValue, maxValue),
        endDate
      };
    }
    if (focusedDate.compare(endDate) > 0) {
      return {
        startDate: alignStart(focusedDate, visibleDuration, locale, minValue, maxValue),
        endDate,
        focusedDate: constrainValue(focusedDate, minValue, maxValue)
      };
    }
    return {
      startDate,
      endDate,
      focusedDate: constrainValue(focusedDate, minValue, maxValue)
    };
  };
}
function getNextPage(focusedDate, startDate, visibleDuration, locale, minValue, maxValue) {
  const adjust = getAdjustedDateFn(visibleDuration, locale, minValue, maxValue);
  const start = startDate.add(visibleDuration);
  return adjust({
    focusedDate: focusedDate.add(visibleDuration),
    startDate: alignStart(
      constrainStart(focusedDate, start, visibleDuration, locale, minValue, maxValue),
      visibleDuration,
      locale
    )
  });
}
function getPreviousPage(focusedDate, startDate, visibleDuration, locale, minValue, maxValue) {
  const adjust = getAdjustedDateFn(visibleDuration, locale, minValue, maxValue);
  let start = startDate.subtract(visibleDuration);
  return adjust({
    focusedDate: focusedDate.subtract(visibleDuration),
    startDate: alignStart(
      constrainStart(focusedDate, start, visibleDuration, locale, minValue, maxValue),
      visibleDuration,
      locale
    )
  });
}
function getNextRow(focusedDate, startDate, visibleDuration, locale, minValue, maxValue) {
  const adjust = getAdjustedDateFn(visibleDuration, locale, minValue, maxValue);
  if (visibleDuration.days) {
    return getNextPage(focusedDate, startDate, visibleDuration, locale, minValue, maxValue);
  }
  if (visibleDuration.weeks || visibleDuration.months || visibleDuration.years) {
    return adjust({
      focusedDate: focusedDate.add({ weeks: 1 }),
      startDate
    });
  }
}
function getPreviousRow(focusedDate, startDate, visibleDuration, locale, minValue, maxValue) {
  const adjust = getAdjustedDateFn(visibleDuration, locale, minValue, maxValue);
  if (visibleDuration.days) {
    return getPreviousPage(focusedDate, startDate, visibleDuration, locale, minValue, maxValue);
  }
  if (visibleDuration.weeks || visibleDuration.months || visibleDuration.years) {
    return adjust({
      focusedDate: focusedDate.subtract({ weeks: 1 }),
      startDate
    });
  }
}
function getSectionStart(focusedDate, startDate, visibleDuration, locale, minValue, maxValue) {
  const adjust = getAdjustedDateFn(visibleDuration, locale, minValue, maxValue);
  if (visibleDuration.days) {
    return adjust({
      focusedDate: startDate,
      startDate
    });
  }
  if (visibleDuration.weeks) {
    return adjust({
      focusedDate: date.startOfWeek(focusedDate, locale),
      startDate
    });
  }
  if (visibleDuration.months || visibleDuration.years) {
    return adjust({
      focusedDate: date.startOfMonth(focusedDate),
      startDate
    });
  }
}
function getSectionEnd(focusedDate, startDate, visibleDuration, locale, minValue, maxValue) {
  const adjust = getAdjustedDateFn(visibleDuration, locale, minValue, maxValue);
  const endDate = getEndDate(startDate, visibleDuration);
  if (visibleDuration.days) {
    return adjust({
      focusedDate: endDate,
      startDate
    });
  }
  if (visibleDuration.weeks) {
    return adjust({
      focusedDate: date.endOfWeek(focusedDate, locale),
      startDate
    });
  }
  if (visibleDuration.months || visibleDuration.years) {
    return adjust({
      focusedDate: date.endOfMonth(focusedDate),
      startDate
    });
  }
}
function getNextSection(focusedDate, startDate, larger, visibleDuration, locale, minValue, maxValue) {
  const adjust = getAdjustedDateFn(visibleDuration, locale, minValue, maxValue);
  if (!larger && !visibleDuration.days) {
    return adjust({
      focusedDate: focusedDate.add(getUnitDuration(visibleDuration)),
      startDate
    });
  }
  if (visibleDuration.days) {
    return getNextPage(focusedDate, startDate, visibleDuration, locale, minValue, maxValue);
  }
  if (visibleDuration.weeks) {
    return adjust({
      focusedDate: focusedDate.add({ months: 1 }),
      startDate
    });
  }
  if (visibleDuration.months || visibleDuration.years) {
    return adjust({
      focusedDate: focusedDate.add({ years: 1 }),
      startDate
    });
  }
}
function getPreviousSection(focusedDate, startDate, larger, visibleDuration, locale, minValue, maxValue) {
  const adjust = getAdjustedDateFn(visibleDuration, locale, minValue, maxValue);
  if (!larger && !visibleDuration.days) {
    return adjust({
      focusedDate: focusedDate.subtract(getUnitDuration(visibleDuration)),
      startDate
    });
  }
  if (visibleDuration.days) {
    return getPreviousPage(focusedDate, startDate, visibleDuration, locale, minValue, maxValue);
  }
  if (visibleDuration.weeks) {
    return adjust({
      focusedDate: focusedDate.subtract({ months: 1 }),
      startDate
    });
  }
  if (visibleDuration.months || visibleDuration.years) {
    return adjust({
      focusedDate: focusedDate.subtract({ years: 1 }),
      startDate
    });
  }
}
var isValidYear = (year) => year != null && year.length === 4;
var isValidMonth = (month) => month != null && parseFloat(month) <= 12;
var isValidDay = (day) => day != null && parseFloat(day) <= 31;
function parseDateString(date$1, locale, timeZone) {
  const regex = createRegex(locale, timeZone);
  let { year, month, day } = extract(regex, date$1) ?? {};
  const hasMatch = year != null || month != null || day != null;
  if (hasMatch) {
    const curr = /* @__PURE__ */ new Date();
    year || (year = curr.getFullYear().toString());
    month || (month = (curr.getMonth() + 1).toString());
    day || (day = curr.getDate().toString());
  }
  if (!isValidYear(year)) {
    year = normalizeYear(year);
  }
  if (isValidYear(year) && isValidMonth(month) && isValidDay(day)) {
    return new date.CalendarDate(+year, +month, +day);
  }
  const time = Date.parse(date$1);
  if (!isNaN(time)) {
    const date2 = new Date(time);
    return new date.CalendarDate(date2.getFullYear(), date2.getMonth() + 1, date2.getDate());
  }
}
function createRegex(locale, timeZone) {
  const formatter = new date.DateFormatter(locale, { day: "numeric", month: "numeric", year: "numeric", timeZone });
  const parts = formatter.formatToParts(new Date(2e3, 11, 25));
  return parts.map(({ type, value }) => type === "literal" ? `${value}?` : `((?!=<${type}>)\\d+)?`).join("");
}
function extract(pattern, str) {
  const matches = str.match(pattern);
  return pattern.toString().match(/<(.+?)>/g)?.map((group) => {
    const groupMatches = group.match(/<(.+)>/);
    if (!groupMatches || groupMatches.length <= 0) {
      return null;
    }
    return group.match(/<(.+)>/)?.[1];
  }).reduce((acc, curr, index) => {
    if (!curr) return acc;
    if (matches && matches.length > index) {
      acc[curr] = matches[index + 1];
    } else {
      acc[curr] = null;
    }
    return acc;
  }, {});
}
function getDateRangePreset(preset, locale, timeZone) {
  const today3 = date.now(timeZone);
  switch (preset) {
    case "thisWeek":
      return [date.startOfWeek(today3, locale), date.endOfWeek(today3, locale)];
    case "thisMonth":
      return [date.startOfMonth(today3), today3];
    case "thisQuarter":
      return [date.startOfMonth(today3).add({ months: -today3.month % 3 }), today3];
    case "thisYear":
      return [date.startOfYear(today3), today3];
    case "last3Days":
      return [today3.add({ days: -2 }), today3];
    case "last7Days":
      return [today3.add({ days: -6 }), today3];
    case "last14Days":
      return [today3.add({ days: -13 }), today3];
    case "last30Days":
      return [today3.add({ days: -29 }), today3];
    case "last90Days":
      return [today3.add({ days: -89 }), today3];
    case "lastMonth":
      return [date.startOfMonth(today3.add({ months: -1 })), date.endOfMonth(today3.add({ months: -1 }))];
    case "lastQuarter":
      return [
        date.startOfMonth(today3.add({ months: -today3.month % 3 - 3 })),
        date.endOfMonth(today3.add({ months: -today3.month % 3 - 1 }))
      ];
    case "lastWeek":
      return [date.startOfWeek(today3, locale).add({ weeks: -1 }), date.endOfWeek(today3, locale).add({ weeks: -1 })];
    case "lastYear":
      return [date.startOfYear(today3.add({ years: -1 })), date.endOfYear(today3.add({ years: -1 }))];
    default:
      throw new Error(`Invalid date range preset: ${preset}`);
  }
}

exports.alignCenter = alignCenter;
exports.alignDate = alignDate;
exports.alignEnd = alignEnd;
exports.alignStart = alignStart;
exports.alignStartDate = alignStartDate;
exports.constrainStart = constrainStart;
exports.constrainValue = constrainValue;
exports.formatRange = formatRange;
exports.formatSelectedDate = formatSelectedDate;
exports.formatVisibleRange = formatVisibleRange;
exports.getAdjustedDateFn = getAdjustedDateFn;
exports.getDateRangePreset = getDateRangePreset;
exports.getDayFormatter = getDayFormatter;
exports.getDaysInWeek = getDaysInWeek;
exports.getDecadeRange = getDecadeRange;
exports.getEndDate = getEndDate;
exports.getEndOfWeek = getEndOfWeek;
exports.getMonthDays = getMonthDays;
exports.getMonthFormatter = getMonthFormatter;
exports.getMonthNames = getMonthNames;
exports.getNextPage = getNextPage;
exports.getNextRow = getNextRow;
exports.getNextSection = getNextSection;
exports.getPreviousAvailableDate = getPreviousAvailableDate;
exports.getPreviousPage = getPreviousPage;
exports.getPreviousRow = getPreviousRow;
exports.getPreviousSection = getPreviousSection;
exports.getSectionEnd = getSectionEnd;
exports.getSectionStart = getSectionStart;
exports.getStartOfWeek = getStartOfWeek;
exports.getTodayDate = getTodayDate;
exports.getUnitDuration = getUnitDuration;
exports.getWeekDays = getWeekDays;
exports.getWeekdayFormats = getWeekdayFormats;
exports.getYearsRange = getYearsRange;
exports.isDateEqual = isDateEqual;
exports.isDateOutsideRange = isDateOutsideRange;
exports.isDateUnavailable = isDateUnavailable;
exports.isNextRangeInvalid = isNextRangeInvalid;
exports.isPreviousRangeInvalid = isPreviousRangeInvalid;
exports.normalizeYear = normalizeYear;
exports.parseDateString = parseDateString;
exports.setCalendar = setCalendar;
exports.setDate = setDate;
