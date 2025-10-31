import type * as Types from '@app/Types.ts'
import * as Helpers from '@helpers/index.ts'
import * as Utils from '@utils/index.ts'

/**
 * Main date manipulation class.
 * @description Provides a fluent interface for working with dates and times.
 */
export class Daytime implements Types.IDaytime {
  /** The date object */
  private readonly date: Date

  /**
   * Creates a new Daytime instance.
   * @param input - Optional date input (Date, number, string, or object with toDate method)
   */
  constructor(input?: Types.DateInput) {
    this.date = Utils.parseDateInput(input)
  }

  /**
   * Adds time to the date.
   * @param value - The value to add
   * @param unit - The time unit
   * @returns A new Daytime instance with time added
   */
  add(value: number, unit: Types.TimeUnit): Types.IDaytime {
    const newDate = Utils.addTime(this.date, value, unit)
    return new Daytime(newDate)
  }

  /**
   * Gets the number of business days in the month.
   * @returns The number of business days in the month
   */
  businessDaysInMonth(): number {
    return Helpers.businessDaysInMonth(this.date)
  }

  /**
   * Gets the number of business days in the year.
   * @returns The number of business days in the year
   */
  businessDaysInYear(): number {
    return Helpers.businessDaysInYear(this.date)
  }

  /**
   * Creates a clone of the current Daytime instance.
   * @returns A new Daytime instance with the same date
   */
  clone(): Types.IDaytime {
    return new Daytime(Helpers.cloneDate(this.date))
  }

  /**
   * Gets the day of month (1-31).
   * @returns The day of month
   */
  day(): number {
    return this.get('day')
  }

  /**
   * Gets the day of week (0-6, Sunday is 0).
   * @returns The day of week (0-6)
   */
  dayOfWeek(): number {
    return Helpers.dayOfWeek(this.date)
  }

  /**
   * Gets the day of year (1-366).
   * @returns The day of year (1-366)
   * @throws {Error} When millisecond constant for day is invalid
   */
  dayOfYear(): number {
    return Helpers.dayOfYear(this.date)
  }

  /**
   * Gets the number of days in the month.
   * @returns The number of days in the month (28-31)
   */
  daysInMonth(): number {
    return Helpers.daysInMonth(this.date)
  }

  /**
   * Gets the number of days in the year.
   * @returns The number of days in the year (365 or 366)
   */
  daysInYear(): number {
    return Helpers.daysInYear(this.date)
  }

  /**
   * Calculates the difference between this date and another date.
   * @param other - The other date to compare with
   * @param unit - The time unit for the difference
   * @returns The difference between the two dates
   * @throws {Error} When time unit is invalid
   */
  diff(other: Types.DateInput, unit: Types.TimeUnit): number {
    const otherDate = Utils.parseDateInput(other)
    return Utils.diff(this.date, otherDate, unit)
  }

  /**
   * Gets the end of a time unit for the date.
   * @param unit - The time unit
   * @returns A new Daytime instance representing the end of the unit
   * @throws {Error} When time unit is invalid
   */
  endOf(unit: Types.TimeUnit): Types.IDaytime {
    const newDate = Utils.endOf(this.date, unit)
    return new Daytime(newDate)
  }

  /**
   * Formats the date according to the specified pattern.
   * @param pattern - The format pattern string
   * @returns The formatted date string
   */
  format(pattern: string): string {
    return Utils.formatDate(this.date, pattern)
  }

  /**
   * Gets a human-readable relative time string from now.
   * @returns A relative time string (e.g., "2 hours ago", "in 3 days")
   */
  fromNow(): string {
    return Utils.getRelativeTime(this.date)
  }

  /**
   * Gets a date component value for the specified unit.
   * @param unit - The time unit to get
   * @returns The component value
   * @throws {Error} When time unit is invalid
   */
  get(unit: Types.TimeUnit): number {
    return Utils.getDateComponent(this.date, unit)
  }

  /**
   * Gets an array of all days in the month.
   * @returns An array of Daytime instances, one for each day in the month
   */
  getDaysInMonth(): Types.IDaytime[] {
    const days = Helpers.getDaysInMonth(this.date)
    return days.map((day) => new Daytime(day))
  }

  /**
   * Gets an array of all months in the year.
   * @returns An array of Daytime instances, one for the first day of each month
   */
  getMonthsInYear(): Types.IDaytime[] {
    const months = Helpers.getMonthsInYear(this.date)
    return months.map((month) => new Daytime(month))
  }

  /**
   * Gets an array of all weeks in the month.
   * Each week is represented by an array of Daytime instances for the days in that week.
   * @returns An array of week arrays, where each week contains Daytime instances for the days in that week
   */
  getWeeksInMonth(): Types.IDaytime[][] {
    const weeks = Helpers.getWeeksInMonth(this.date)
    return weeks.map((week) => week.map((day) => new Daytime(day)))
  }

  /**
   * Gets the hour (0-23).
   * @returns The hour
   */
  hour(): number {
    return this.get('hour')
  }

  /**
   * Checks if this date is after another date.
   * @param other - The other date to compare with
   * @param unit - Optional time unit to normalize dates before comparison
   * @returns True if this date is after the other date, false otherwise
   */
  isAfter(other: Types.DateInput, unit?: Types.TimeUnit): boolean {
    const otherDate = Utils.parseDateInput(other)
    return Utils.isAfter(this.date, otherDate, unit)
  }

  /**
   * Checks if this date is before another date.
   * @param other - The other date to compare with
   * @param unit - Optional time unit to normalize dates before comparison
   * @returns True if this date is before the other date, false otherwise
   */
  isBefore(other: Types.DateInput, unit?: Types.TimeUnit): boolean {
    const otherDate = Utils.parseDateInput(other)
    return Utils.isBefore(this.date, otherDate, unit)
  }

  /**
   * Checks if this date is between two other dates.
   * @param start - The start date
   * @param end - The end date
   * @param unit - Optional time unit to normalize dates before comparison
   * @param inclusivity - Inclusivity mode ('[]', '[)', '(]', or '()')
   * @returns True if this date is between start and end, false otherwise
   */
  isBetween(
    start: Types.DateInput,
    end: Types.DateInput,
    unit?: Types.TimeUnit,
    inclusivity: Types.Inclusivity = '[]'
  ): boolean {
    const startDate = Utils.parseDateInput(start)
    const endDate = Utils.parseDateInput(end)
    return Utils.isBetween(this.date, startDate, endDate, unit, inclusivity)
  }

  /**
   * Checks if the date is a business day (Monday-Friday).
   * @returns True if the date is a business day, false otherwise
   */
  isBusinessDay(): boolean {
    return Helpers.isBusinessDay(this.date)
  }

  /**
   * Checks if the date is in daylight saving time.
   * @returns True if the date is in DST, false otherwise
   */
  isDST(): boolean {
    return Helpers.isDST(this.date)
  }

  /**
   * Checks if this date is in the future (after today).
   * @returns True if this date is in the future, false otherwise
   */
  isFuture(): boolean {
    const now = new Date()
    return Utils.isAfter(this.date, now)
  }

  /**
   * Checks if the year of the date is a leap year.
   * @returns True if the year is a leap year, false otherwise
   */
  isLeapYear(): boolean {
    return Helpers.isLeapYear(this.date)
  }

  /**
   * Checks if this date is in the past (before today).
   * @returns True if this date is in the past, false otherwise
   */
  isPast(): boolean {
    const now = new Date()
    return Utils.isBefore(this.date, now)
  }

  /**
   * Checks if this date is the same as another date.
   * @param other - The other date to compare with
   * @param unit - Optional time unit to normalize dates before comparison
   * @returns True if dates are the same, false otherwise
   */
  isSame(other: Types.DateInput, unit?: Types.TimeUnit): boolean {
    const otherDate = Utils.parseDateInput(other)
    return Utils.isSame(this.date, otherDate, unit)
  }

  /**
   * Checks if this date is the same day as another date.
   * @param other - The other date to compare with
   * @returns True if dates are on the same day, false otherwise
   */
  isSameDay(other: Types.DateInput): boolean {
    return this.isSame(other, 'day')
  }

  /**
   * Checks if this date is the same month as another date.
   * @param other - The other date to compare with
   * @returns True if dates are in the same month, false otherwise
   */
  isSameMonth(other: Types.DateInput): boolean {
    return this.isSame(other, 'month')
  }

  /**
   * Checks if this date is the same as or after another date.
   * @param other - The other date to compare with
   * @param unit - Optional time unit to normalize dates before comparison
   * @returns True if this date is the same as or after the other date, false otherwise
   */
  isSameOrAfter(other: Types.DateInput, unit?: Types.TimeUnit): boolean {
    const otherDate = Utils.parseDateInput(other)
    return Utils.isSameOrAfter(this.date, otherDate, unit)
  }

  /**
   * Checks if this date is the same as or before another date.
   * @param other - The other date to compare with
   * @param unit - Optional time unit to normalize dates before comparison
   * @returns True if this date is the same as or before the other date, false otherwise
   */
  isSameOrBefore(other: Types.DateInput, unit?: Types.TimeUnit): boolean {
    const otherDate = Utils.parseDateInput(other)
    return Utils.isSameOrBefore(this.date, otherDate, unit)
  }

  /**
   * Checks if this date is the same quarter as another date.
   * @param other - The other date to compare with
   * @returns True if dates are in the same quarter, false otherwise
   */
  isSameQuarter(other: Types.DateInput): boolean {
    return this.isSame(other, 'quarter')
  }

  /**
   * Checks if this date is the same week as another date.
   * @param other - The other date to compare with
   * @returns True if dates are in the same week, false otherwise
   */
  isSameWeek(other: Types.DateInput): boolean {
    return this.isSame(other, 'week')
  }

  /**
   * Checks if this date is the same year as another date.
   * @param other - The other date to compare with
   * @returns True if dates are in the same year, false otherwise
   */
  isSameYear(other: Types.DateInput): boolean {
    return this.isSame(other, 'year')
  }

  /**
   * Checks if this date is in the current month.
   * @returns True if this date is in the current month, false otherwise
   */
  isThisMonth(): boolean {
    const now = new Date()
    return this.isSame(now, 'month')
  }

  /**
   * Checks if this date is in the current quarter.
   * @returns True if this date is in the current quarter, false otherwise
   */
  isThisQuarter(): boolean {
    const now = new Date()
    return this.isSame(now, 'quarter')
  }

  /**
   * Checks if this date is in the current week.
   * @returns True if this date is in the current week, false otherwise
   */
  isThisWeek(): boolean {
    const now = new Date()
    return this.isSame(now, 'week')
  }

  /**
   * Checks if this date is in the current year.
   * @returns True if this date is in the current year, false otherwise
   */
  isThisYear(): boolean {
    const now = new Date()
    return this.isSame(now, 'year')
  }

  /**
   * Checks if this date is today.
   * @returns True if this date is today, false otherwise
   */
  isToday(): boolean {
    const now = new Date()
    return this.isSame(now, 'day')
  }

  /**
   * Checks if this date is tomorrow.
   * @returns True if this date is tomorrow, false otherwise
   */
  isTomorrow(): boolean {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return this.isSame(tomorrow, 'day')
  }

  /**
   * Checks if the date is valid.
   * @returns True if the date is valid, false otherwise
   */
  isValid(): boolean {
    return Helpers.isValid(this.date)
  }

  /**
   * Checks if the date is in UTC timezone.
   * @returns True if the date is in UTC, false otherwise
   */
  isUTC(): boolean {
    return Helpers.isUTC(this.date)
  }

  /**
   * Checks if the date is a weekend (Saturday or Sunday).
   * @returns True if the date is a weekend, false otherwise
   */
  isWeekend(): boolean {
    return Helpers.isWeekend(this.date)
  }

  /**
   * Checks if this date is yesterday.
   * @returns True if this date is yesterday, false otherwise
   */
  isYesterday(): boolean {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    return this.isSame(yesterday, 'day')
  }

  /**
   * Gets the ISO week number (1-53).
   * @returns The ISO week number (1-53)
   * @throws {Error} When millisecond constant for week is invalid
   */
  isoWeek(): number {
    return Helpers.isoWeek(this.date)
  }

  /**
   * Gets the ISO weekday number (1-7, Monday is 1).
   * @returns The ISO weekday number (1-7)
   */
  isoWeekday(): number {
    return Helpers.isoWeekday(this.date)
  }

  /**
   * Gets the ISO week year.
   * @returns The ISO week year
   */
  isoWeekYear(): number {
    return Helpers.isoWeekYear(this.date)
  }

  /**
   * Gets the number of ISO weeks in the year.
   * @returns The number of ISO weeks in the year (52 or 53)
   * @throws {Error} When millisecond constant for week is invalid
   */
  isoWeeksInYear(): number {
    return Helpers.isoWeeksInYear(this.date.getFullYear())
  }

  /**
   * Converts the date to local timezone.
   * @returns A new Daytime instance in local timezone
   */
  local(): Types.IDaytime {
    const localDate = Helpers.cloneDate(this.date)
    return new Daytime(localDate)
  }

  /**
   * Gets the millisecond (0-999).
   * @returns The millisecond
   */
  millisecond(): number {
    return this.get('millisecond')
  }

  /**
   * Gets the minute (0-59).
   * @returns The minute
   */
  minute(): number {
    return this.get('minute')
  }

  /**
   * Gets the month (1-12).
   * @returns The month
   */
  month(): number {
    return this.get('month')
  }

  /**
   * Gets the last occurrence of a weekday in the month.
   * @param weekday - The weekday (0-6, Sunday is 0)
   * @returns A new Daytime instance representing the last occurrence of the weekday
   */
  lastWeekday(weekday: number): Types.IDaytime {
    const newDate = Helpers.lastWeekday(this.date, weekday)
    return new Daytime(newDate)
  }

  /**
   * Gets the nearest weekday to this date (moves weekends to nearest weekday).
   * @returns A new Daytime instance representing the nearest weekday
   */
  nearestWeekday(): Types.IDaytime {
    const newDate = Helpers.nearestWeekday(this.date)
    return new Daytime(newDate)
  }

  /**
   * Gets the next business day.
   * @returns A new Daytime instance representing the next business day
   */
  nextBusinessDay(): Types.IDaytime {
    const newDate = Helpers.nextBusinessDay(this.date)
    return new Daytime(newDate)
  }

  /**
   * Gets the next occurrence of a weekday.
   * @param weekday - The weekday (0-6, Sunday is 0)
   * @returns A new Daytime instance representing the next occurrence of the weekday
   */
  nextWeekday(weekday: number): Types.IDaytime {
    const newDate = Helpers.nextWeekday(this.date, weekday)
    return new Daytime(newDate)
  }

  /**
   * Gets the nth occurrence of a weekday in the month.
   * @param n - The occurrence number (1-based)
   * @param weekday - The weekday (0-6, Sunday is 0)
   * @returns A new Daytime instance representing the nth occurrence of the weekday
   */
  nthWeekday(n: number, weekday: number): Types.IDaytime {
    const newDate = Helpers.nthWeekday(this.date, n, weekday)
    return new Daytime(newDate)
  }

  /**
   * Gets the previous business day.
   * @returns A new Daytime instance representing the previous business day
   */
  prevBusinessDay(): Types.IDaytime {
    const newDate = Helpers.prevBusinessDay(this.date)
    return new Daytime(newDate)
  }

  /**
   * Gets the previous occurrence of a weekday.
   * @param weekday - The weekday (0-6, Sunday is 0)
   * @returns A new Daytime instance representing the previous occurrence of the weekday
   */
  prevWeekday(weekday: number): Types.IDaytime {
    const newDate = Helpers.prevWeekday(this.date, weekday)
    return new Daytime(newDate)
  }

  /**
   * Gets the previous business day.
   * @returns A new Daytime instance representing the previous business day
   */
  previousBusinessDay(): Types.IDaytime {
    return this.prevBusinessDay()
  }

  /**
   * Gets the quarter (1-4).
   * @returns The quarter
   */
  quarter(): number {
    return this.get('quarter')
  }

  /**
   * Gets the second (0-59).
   * @returns The second
   */
  second(): number {
    return this.get('second')
  }

  /**
   * Sets date components.
   * @param options - Object containing component values to set
   * @returns A new Daytime instance with components set
   * @throws {Error} When millisecond constant for day is invalid
   */
  set(options: Types.SetOptions): Types.IDaytime
  /**
   * Sets a single date component.
   * @param unit - The time unit to set
   * @param value - The value to set
   * @returns A new Daytime instance with the component set
   * @throws {Error} When time unit is invalid or value is missing
   */
  set(unit: Types.TimeUnit, value: number): Types.IDaytime
  set(optionsOrUnit: Types.SetOptions | Types.TimeUnit, value?: number): Types.IDaytime {
    if (typeof optionsOrUnit === 'string') {
      if (value === undefined) {
        throw new Error('Value is required when setting a single component')
      }
      const newDate = Utils.setSingleComponent(this.date, optionsOrUnit, value)
      return new Daytime(newDate)
    }
    const newDate = Utils.setDateComponent(this.date, optionsOrUnit)
    return new Daytime(newDate)
  }

  /**
   * Gets the start of a time unit for the date.
   * @param unit - The time unit
   * @returns A new Daytime instance representing the start of the unit
   * @throws {Error} When time unit is invalid
   */
  startOf(unit: Types.TimeUnit): Types.IDaytime {
    const newDate = Utils.startOf(this.date, unit)
    return new Daytime(newDate)
  }

  /**
   * Subtracts time from the date.
   * @param value - The value to subtract
   * @param unit - The time unit
   * @returns A new Daytime instance with time subtracted
   */
  subtract(value: number, unit: Types.TimeUnit): Types.IDaytime {
    const newDate = Utils.subtractTime(this.date, value, unit)
    return new Daytime(newDate)
  }

  /**
   * Gets the current system timezone.
   * @returns The IANA timezone identifier, or 'UTC' if unable to determine
   */
  timezone(): string {
    return Helpers.getTimezone()
  }

  /**
   * Gets the timezone offset in minutes for the date.
   * @returns The timezone offset in minutes
   */
  timezoneOffset(): number {
    return Helpers.getTimezoneOffset(this.date)
  }

  /**
   * Converts the date to an array of components.
   * @returns Array containing [year, month, day, hour, minute, second, millisecond]
   */
  toArray(): [number, number, number, number, number, number, number] {
    const components = Helpers.extractDateComponents(this.date)
    return [
      components.year,
      components.month,
      components.day,
      components.hour,
      components.minute,
      components.second,
      components.millisecond
    ]
  }

  /**
   * Converts the Daytime instance to a native Date object.
   * @returns A cloned Date object
   */
  toDate(): Date {
    return Helpers.cloneDate(this.date)
  }

  /**
   * Converts the date to an ISO 8601 string.
   * @returns ISO 8601 formatted date string
   */
  toISO(): string {
    return this.date.toISOString()
  }

  /**
   * Converts the date to a JSON string (ISO 8601 format).
   * @returns ISO 8601 formatted date string
   */
  toJSON(): string {
    return this.date.toISOString()
  }

  /**
   * Converts the date to an object with date components.
   * @returns Object containing year, month, day, hour, minute, second, and millisecond
   */
  toObject(): {
    year: number
    month: number
    day: number
    hour: number
    minute: number
    second: number
    millisecond: number
  } {
    return Helpers.extractDateComponents(this.date)
  }

  /**
   * Converts the date to a string representation.
   * @returns String representation of the date
   */
  toString(): string {
    return this.date.toString()
  }

  /**
   * Converts the date to the specified timezone.
   * @param tz - The target timezone (IANA timezone identifier)
   * @returns A new Daytime instance in the specified timezone
   */
  toTimezone(tz: string): Types.IDaytime {
    const newDate = Helpers.convertToTimezone(this.date, tz)
    return new Daytime(newDate)
  }

  /**
   * Converts the date to a Unix timestamp (seconds since epoch).
   * @returns Unix timestamp in seconds
   */
  toUnix(): number {
    return Math.floor(this.date.getTime() / 1000)
  }

  /**
   * Converts the date to UTC timezone.
   * @returns A new Daytime instance in UTC
   */
  toUTC(): Types.IDaytime {
    const components = Helpers.extractUTCDateComponents(this.date)
    const utcDate = Helpers.createUTCDate(
      components.year,
      components.month - 1,
      components.day,
      components.hour,
      components.minute,
      components.second,
      components.millisecond
    )
    return new Daytime(utcDate)
  }

  /**
   * Gets the UTC offset in minutes for the date.
   * @returns The UTC offset in minutes
   */
  utcOffset(): number {
    return Helpers.getTimezoneOffset(this.date)
  }

  /**
   * Returns the primitive value of the date (timestamp in milliseconds).
   * @returns The timestamp in milliseconds since epoch
   */
  valueOf(): number {
    return this.date.getTime()
  }

  /**
   * Gets the week number.
   * @returns The week number
   */
  week(): number {
    return this.get('week')
  }

  /**
   * Gets the week number within the month.
   * @returns The week number within the month
   */
  weekOfMonth(): number {
    return Helpers.weekOfMonth(this.date)
  }

  /**
   * Gets the number of weeks in the month.
   * @returns The number of weeks in the month
   */
  weeksInMonth(): number {
    return Helpers.weeksInMonth(this.date)
  }

  /**
   * Gets the number of weeks in the year.
   * @returns The number of weeks in the year (at least 52)
   */
  weeksInYear(): number {
    return Helpers.weeksInYear(this.date)
  }

  /**
   * Gets the year.
   * @returns The year
   */
  year(): number {
    return this.get('year')
  }
}
