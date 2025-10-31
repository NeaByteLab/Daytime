/**
 * Union type for date input values.
 */
export type DateInput = Date | string | number | { toDate(): Date }

/**
 * Inclusivity mode for date range comparisons.
 */
export type Inclusivity = '[]' | '()' | '[)' | '(]'

/**
 * Options object for setting multiple date components.
 */
export interface SetOptions {
  /** Year value */
  year?: number
  /** Month value (1-12) */
  month?: number
  /** Quarter value (1-4) */
  quarter?: number
  /** Week value */
  week?: number
  /** Day of month value */
  day?: number
  /** Hour value (0-23) */
  hour?: number
  /** Minute value (0-59) */
  minute?: number
  /** Second value (0-59) */
  second?: number
  /** Millisecond value (0-999) */
  millisecond?: number
}

/**
 * Interface defining the Daytime class API.
 */
export interface IDaytime {
  /** Adds a time value to the date */
  add(value: number, unit: TimeUnit): IDaytime
  /** Clones the date */
  clone(): IDaytime
  /** Gets the day of week */
  dayOfWeek(): number
  /** Gets the day of year */
  dayOfYear(): number
  /** Gets the number of days in the month */
  daysInMonth(): number
  /** Gets the number of days in the year */
  daysInYear(): number
  /** Gets the difference between two dates */
  diff(other: DateInput, unit: TimeUnit): number
  /** Gets the end of the date */
  endOf(unit: TimeUnit): IDaytime
  /** Formats the date */
  format(pattern: string): string
  /** Gets the date from now */
  fromNow(): string
  /** Gets the date component */
  get(unit: TimeUnit): number
  /** Checks if the date is after another date */
  isAfter(other: DateInput, unit?: TimeUnit): boolean
  /** Checks if the date is before another date */
  isBefore(other: DateInput, unit?: TimeUnit): boolean
  /** Checks if the date is between two dates */
  isBetween(start: DateInput, end: DateInput, unit?: TimeUnit, inclusivity?: Inclusivity): boolean
  /** Checks if the date is a business day */
  isBusinessDay(): boolean
  /** Checks if the date is in daylight saving time */
  isDST(): boolean
  /** Checks if the date is a leap year */
  isLeapYear(): boolean
  /** Checks if the date is the same as another date */
  isSame(other: DateInput, unit?: TimeUnit): boolean
  /** Checks if the date is the same as or after another date */
  isSameOrAfter(other: DateInput, unit?: TimeUnit): boolean
  /** Checks if the date is the same as or before another date */
  isSameOrBefore(other: DateInput, unit?: TimeUnit): boolean
  /** Checks if the date is valid */
  isValid(): boolean
  /** Checks if the date is in UTC */
  isUTC(): boolean
  /** Checks if the date is a weekend */
  isWeekend(): boolean
  /** Gets the ISO week number */
  isoWeek(): number
  /** Gets the ISO weekday number */
  isoWeekday(): number
  /** Gets the ISO week year */
  isoWeekYear(): number
  /** Gets the number of ISO weeks in the year */
  isoWeeksInYear(): number
  /** Gets the local date */
  local(): IDaytime
  /** Sets the date component */
  set(options: SetOptions): IDaytime
  /** Sets the date component */
  set(unit: TimeUnit, value: number): IDaytime
  /** Gets the start of the date */
  startOf(unit: TimeUnit): IDaytime
  /** Subtracts a time value from the date */
  subtract(value: number, unit: TimeUnit): IDaytime
  /** Gets the timezone */
  timezone(): string
  /** Gets the timezone offset */
  timezoneOffset(): number
  /** Converts the date to an array */
  toArray(): [number, number, number, number, number, number, number]
  /** Converts the date to a Date object */
  toDate(): Date
  /** Converts the date to an ISO string */
  toISO(): string
  /** Converts the date to a JSON string */
  toJSON(): string
  /** Converts the date to an object */
  toObject(): {
    year: number
    month: number
    day: number
    hour: number
    minute: number
    second: number
    millisecond: number
  }
  /** Converts the date to a string */
  toString(): string
  /** Converts the date to a timezone */
  toTimezone(tz: string): IDaytime
  /** Converts the date to a Unix timestamp */
  toUnix(): number
  /** Converts the date to UTC */
  toUTC(): IDaytime
  /** Gets the UTC offset */
  utcOffset(): number
  /** Gets the value of the date */
  valueOf(): number
  /** Gets the week of the month */
  weekOfMonth(): number
  /** Gets the number of weeks in the month */
  weeksInMonth(): number
  /** Gets the number of weeks in the year */
  weeksInYear(): number
}

/**
 * Union type representing all valid time unit strings.
 */
export type TimeUnit =
  | 'year'
  | 'years'
  | 'y'
  | 'quarter'
  | 'quarters'
  | 'Q'
  | 'month'
  | 'months'
  | 'M'
  | 'week'
  | 'weeks'
  | 'w'
  | 'isoWeek'
  | 'isoWeeks'
  | 'day'
  | 'days'
  | 'd'
  | 'hour'
  | 'hours'
  | 'h'
  | 'minute'
  | 'minutes'
  | 'm'
  | 'second'
  | 'seconds'
  | 's'
  | 'millisecond'
  | 'milliseconds'
  | 'ms'

/**
 * Object containing date component values.
 */
export interface DateComponents {
  /** Year value */
  year: number
  /** Month value (1-12, 1-indexed) */
  month: number
  /** Day of month value */
  day: number
  /** Hour value (0-23) */
  hour: number
  /** Minute value (0-59) */
  minute: number
  /** Second value (0-59) */
  second: number
  /** Millisecond value (0-999) */
  millisecond: number
}

/**
 * Object containing parsed date parts.
 */
export interface DateParts {
  /** Year value */
  year: number
  /** Month value (0-11, 0-indexed) */
  month: number
  /** Day of month value */
  day: number
  /** Hour value (0-23) */
  hour: number
  /** Minute value (0-59) */
  minute: number
  /** Second value (0-59) */
  second: number
}
