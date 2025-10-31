import type * as Types from '@app/Types.ts'
import * as Constants from '@app/Constant.ts'
import * as Helpers from '@helpers/index.ts'

/**
 * Adds time to a date.
 * @param date - The date to add time to
 * @param value - The value to add
 * @param unit - The time unit
 * @returns A new Date object with time added
 */
export function addTime(date: Date, value: number, unit: Types.TimeUnit): Date {
  const newDate = Helpers.cloneDate(date)
  const unitStr = Helpers.normalizeUnit(unit)
  if (Helpers.isYear(unitStr)) {
    newDate.setFullYear(newDate.getFullYear() + value)
    return newDate
  }
  if (Helpers.isMonth(unitStr)) {
    newDate.setMonth(newDate.getMonth() + value)
    return newDate
  }
  const ms = unitToMilliseconds(value, unit)
  return Helpers.cloneDate(new Date(newDate.getTime() + ms))
}

/**
 * Calculates the difference between two dates in the specified unit.
 * @param date1 - The first date
 * @param date2 - The second date
 * @param unit - The time unit for the difference
 * @returns The difference between the two dates
 * @throws {Error} When time unit is invalid
 */
export function diff(date1: Date, date2: Date, unit: Types.TimeUnit): number {
  const diffMs = date1.getTime() - date2.getTime()
  const canonicalUnit = Helpers.getCanonicalUnit(unit)
  const msPerUnit = Constants.millisecondsPerUnit[canonicalUnit]
  if (msPerUnit === undefined) {
    throw new Error(`Invalid time unit for diff: ${unit}`)
  }
  return diffMs / msPerUnit
}

/**
 * Gets the end of a time unit for the given date.
 * @param date - The date to get end of unit for
 * @param unit - The time unit
 * @returns A new Date representing the end of the unit
 * @throws {Error} When time unit is invalid
 */
export function endOf(date: Date, unit: Types.TimeUnit): Date {
  const newDate = Helpers.cloneDate(date)
  const canonicalUnit = Helpers.getCanonicalUnit(unit)
  switch (canonicalUnit) {
    case 'millisecond':
      return newDate
    case 'second':
      newDate.setMilliseconds(999)
      return newDate
    case 'minute':
      newDate.setSeconds(59, 999)
      return newDate
    case 'hour':
      newDate.setMinutes(59, 59, 999)
      return newDate
    case 'day':
      setEndOfDay(newDate)
      return newDate
    case 'week': {
      const day = newDate.getDay()
      const daysUntilSaturday = 6 - day
      newDate.setDate(newDate.getDate() + daysUntilSaturday)
      setEndOfDay(newDate)
      return newDate
    }
    case 'isoWeek':
      return Helpers.endOfISOWeek(date)
    case 'month':
      newDate.setMonth(newDate.getMonth() + 1, 0)
      setEndOfDay(newDate)
      return newDate
    case 'quarter': {
      const quarterEndMonth = Helpers.getQuarterEndMonth(Helpers.getQuarterNumber(newDate)) + 1
      newDate.setMonth(quarterEndMonth, 0)
      setEndOfDay(newDate)
      return newDate
    }
    case 'year':
      newDate.setMonth(11, 31)
      setEndOfDay(newDate)
      return newDate
    default:
      throw new Error(`Invalid time unit for endOf: ${unit}`)
  }
}

/**
 * Gets a date component value for the specified unit.
 * @param date - The date to get component from
 * @param unit - The time unit to get
 * @returns The component value
 * @throws {Error} When time unit is invalid
 */
export function getDateComponent(date: Date, unit: Types.TimeUnit): number {
  const canonicalUnit = Helpers.getCanonicalUnit(unit)
  switch (canonicalUnit) {
    case 'year':
      return date.getFullYear()
    case 'quarter':
      return Helpers.getQuarterNumber(date)
    case 'month':
      return date.getMonth() + 1
    case 'week':
      return Helpers.calculateWeekNumber(date)
    case 'day':
      return date.getDate()
    case 'hour':
      return date.getHours()
    case 'minute':
      return date.getMinutes()
    case 'second':
      return date.getSeconds()
    case 'millisecond':
      return date.getMilliseconds()
    default:
      throw new Error(`Invalid time unit for get: ${unit}`)
  }
}

/**
 * Sets multiple date components at once.
 * @param date - The date to modify
 * @param options - Object containing component values to set
 * @returns A new Date object with components set
 * @throws {Error} When millisecond constant for day is invalid
 */
export function setDateComponent(date: Date, options: Types.SetOptions): Date {
  const newDate = Helpers.cloneDate(date)
  if (options.year !== undefined) {
    newDate.setFullYear(options.year)
  }
  if (options.quarter !== undefined) {
    const quarter = Helpers.clampQuarter(options.quarter)
    const quarterStartMonth = Helpers.getQuarterStartMonth(quarter)
    newDate.setMonth(quarterStartMonth)
  }
  if (options.month !== undefined) {
    newDate.setMonth(options.month - 1)
  }
  if (options.week !== undefined) {
    const startOfYearDate = Helpers.startOfYear(newDate)
    const daysToAdd = (options.week - 1) * 7 - startOfYearDate.getDay()
    const msPerDay = Constants.millisecondsPerUnit['day']
    if (msPerDay === undefined) {
      throw new Error('Invalid millisecond constant for day')
    }
    newDate.setTime(startOfYearDate.getTime() + daysToAdd * msPerDay)
  }
  if (options.day !== undefined) {
    newDate.setDate(options.day)
  }
  if (options.hour !== undefined) {
    newDate.setHours(options.hour)
  }
  if (options.minute !== undefined) {
    newDate.setMinutes(options.minute)
  }
  if (options.second !== undefined) {
    newDate.setSeconds(options.second)
  }
  if (options.millisecond !== undefined) {
    newDate.setMilliseconds(options.millisecond)
  }
  return newDate
}

/**
 * Sets a single date component.
 * @param date - The date to modify
 * @param unit - The time unit to set
 * @param value - The value to set
 * @returns A new Date object with the component set
 * @throws {Error} When time unit is invalid or millisecond constant for day is invalid
 */
export function setSingleComponent(date: Date, unit: Types.TimeUnit, value: number): Date {
  const newDate = Helpers.cloneDate(date)
  const canonicalUnit = Helpers.getCanonicalUnit(unit)
  switch (canonicalUnit) {
    case 'year':
      newDate.setFullYear(value)
      return newDate
    case 'quarter': {
      const quarter = Helpers.clampQuarter(value)
      const quarterStartMonth = Helpers.getQuarterStartMonth(quarter)
      newDate.setMonth(quarterStartMonth)
      return newDate
    }
    case 'month':
      newDate.setMonth(value - 1)
      return newDate
    case 'week': {
      const startOfYearDate = Helpers.startOfYear(newDate)
      const daysToAdd = (value - 1) * 7 - startOfYearDate.getDay()
      const msPerDay = Constants.millisecondsPerUnit['day']
      if (msPerDay === undefined) {
        throw new Error('Invalid millisecond constant for day')
      }
      newDate.setTime(startOfYearDate.getTime() + daysToAdd * msPerDay)
      return newDate
    }
    case 'day':
      newDate.setDate(value)
      return newDate
    case 'hour':
      newDate.setHours(value)
      return newDate
    case 'minute':
      newDate.setMinutes(value)
      return newDate
    case 'second':
      newDate.setSeconds(value)
      return newDate
    case 'millisecond':
      newDate.setMilliseconds(value)
      return newDate
    default:
      throw new Error(`Invalid time unit for set: ${unit}`)
  }
}

/**
 * Gets the start of a time unit for the given date.
 * @param date - The date to get start of unit for
 * @param unit - The time unit
 * @returns A new Date representing the start of the unit
 * @throws {Error} When time unit is invalid
 */
export function startOf(date: Date, unit: Types.TimeUnit): Date {
  const newDate = Helpers.cloneDate(date)
  const canonicalUnit = Helpers.getCanonicalUnit(unit)
  switch (canonicalUnit) {
    case 'millisecond':
      return newDate
    case 'second':
      newDate.setMilliseconds(0)
      return newDate
    case 'minute':
      newDate.setSeconds(0, 0)
      return newDate
    case 'hour':
      newDate.setMinutes(0, 0, 0)
      return newDate
    case 'day':
      setStartOfDay(newDate)
      return newDate
    case 'week': {
      const day = newDate.getDay()
      newDate.setDate(newDate.getDate() - day)
      setStartOfDay(newDate)
      return newDate
    }
    case 'isoWeek':
      return Helpers.startOfISOWeek(date)
    case 'month':
      newDate.setDate(1)
      setStartOfDay(newDate)
      return newDate
    case 'quarter': {
      const quarterStartMonth = Helpers.getQuarterStartMonthFromDate(newDate)
      newDate.setMonth(quarterStartMonth, 1)
      setStartOfDay(newDate)
      return newDate
    }
    case 'year':
      newDate.setMonth(0, 1)
      setStartOfDay(newDate)
      return newDate
    default:
      throw new Error(`Invalid time unit for startOf: ${unit}`)
  }
}

/**
 * Subtracts time from a date.
 * @param date - The date to subtract time from
 * @param value - The value to subtract
 * @param unit - The time unit
 * @returns A new Date object with time subtracted
 */
export function subtractTime(date: Date, value: number, unit: Types.TimeUnit): Date {
  return addTime(date, -value, unit)
}

/**
 * Converts a time value and unit to milliseconds.
 * @param value - The numeric value
 * @param unit - The time unit
 * @returns The equivalent milliseconds
 * @throws {Error} When time unit is invalid
 */
export function unitToMilliseconds(value: number, unit: Types.TimeUnit): number {
  const canonicalUnit = Helpers.getCanonicalUnit(unit)
  const ms = Constants.millisecondsPerUnit[canonicalUnit]
  if (ms === undefined) {
    throw new Error(`Invalid time unit: ${unit}`)
  }
  return value * ms
}

/**
 * Sets a date to the end of day (23:59:59.999).
 * @param date - The date to modify
 */
function setEndOfDay(date: Date): void {
  date.setHours(23, 59, 59, 999)
}

/**
 * Sets a date to the start of day (00:00:00.000).
 * @param date - The date to modify
 */
function setStartOfDay(date: Date): void {
  date.setHours(0, 0, 0, 0)
}
