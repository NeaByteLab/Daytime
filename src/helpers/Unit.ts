import type * as Types from '@app/Types.ts'

/**
 * Converts a time unit to its canonical form.
 * @param unit - The time unit to normalize
 * @returns The canonical unit name
 */
export function getCanonicalUnit(unit: Types.TimeUnit): string {
  const unitStr = normalizeUnit(unit)
  switch (unitStr) {
    case 'year':
    case 'years':
    case 'y':
      return 'year'
    case 'quarter':
    case 'quarters':
    case 'q':
      return 'quarter'
    case 'month':
    case 'months':
    case 'm':
      return 'month'
    case 'week':
    case 'weeks':
    case 'w':
      return 'week'
    case 'isoweek':
    case 'isoweeks':
      return 'isoWeek'
    case 'day':
    case 'days':
    case 'd':
      return 'day'
    case 'hour':
    case 'hours':
    case 'h':
      return 'hour'
    case 'minute':
    case 'minutes':
      return 'minute'
    case 'second':
    case 'seconds':
    case 's':
      return 'second'
    case 'millisecond':
    case 'milliseconds':
    case 'ms':
      return 'millisecond'
    default:
      return unitStr
  }
}

/**
 * Checks if the unit string represents a day.
 * @param unitStr - The unit string to check
 * @returns True if the unit is a day, false otherwise
 */
export function isDay(unitStr: string): boolean {
  return unitStr === 'day' || unitStr === 'days' || unitStr === 'd'
}

/**
 * Checks if the unit string represents an hour.
 * @param unitStr - The unit string to check
 * @returns True if the unit is an hour, false otherwise
 */
export function isHour(unitStr: string): boolean {
  return unitStr === 'hour' || unitStr === 'hours' || unitStr === 'h'
}

/**
 * Checks if the unit string represents a millisecond.
 * @param unitStr - The unit string to check
 * @returns True if the unit is a millisecond, false otherwise
 */
export function isMillisecond(unitStr: string): boolean {
  return unitStr === 'millisecond' || unitStr === 'milliseconds' || unitStr === 'ms'
}

/**
 * Checks if the unit string represents a minute.
 * @param unitStr - The unit string to check
 * @returns True if the unit is a minute, false otherwise
 */
export function isMinute(unitStr: string): boolean {
  return unitStr === 'minute' || unitStr === 'minutes' || unitStr === 'm'
}

/**
 * Checks if the unit string represents a month.
 * @param unitStr - The unit string to check
 * @returns True if the unit is a month, false otherwise
 */
export function isMonth(unitStr: string): boolean {
  return unitStr === 'month' || unitStr === 'months' || unitStr === 'M'
}

/**
 * Checks if the unit string represents a quarter.
 * @param unitStr - The unit string to check
 * @returns True if the unit is a quarter, false otherwise
 */
export function isQuarter(unitStr: string): boolean {
  return unitStr === 'quarter' || unitStr === 'quarters' || unitStr === 'q'
}

/**
 * Checks if the unit string represents a second.
 * @param unitStr - The unit string to check
 * @returns True if the unit is a second, false otherwise
 */
export function isSecond(unitStr: string): boolean {
  return unitStr === 'second' || unitStr === 'seconds' || unitStr === 's'
}

/**
 * Checks if the unit string represents a week.
 * @param unitStr - The unit string to check
 * @returns True if the unit is a week, false otherwise
 */
export function isWeek(unitStr: string): boolean {
  return unitStr === 'week' || unitStr === 'weeks' || unitStr === 'w'
}

/**
 * Checks if the unit string represents a year.
 * @param unitStr - The unit string to check
 * @returns True if the unit is a year, false otherwise
 */
export function isYear(unitStr: string): boolean {
  return unitStr === 'year' || unitStr === 'years' || unitStr === 'y'
}

/**
 * Normalizes a time unit string to lowercase.
 * @param unit - The time unit to normalize
 * @returns The normalized unit string in lowercase
 */
export function normalizeUnit(unit: Types.TimeUnit): string {
  return unit.toLowerCase()
}
