import type * as Types from '@app/Types.ts'
import * as Helpers from '@helpers/index.ts'
import * as Utils from '@utils/index.ts'

/**
 * Checks if the first date is after the second date.
 * @param date1 - The first date to compare
 * @param date2 - The second date to compare
 * @param unit - Optional time unit to normalize dates before comparison
 * @returns True if date1 is after date2, false otherwise
 */
export function isAfter(date1: Date, date2: Date, unit?: Types.TimeUnit): boolean {
  const d1 = normalizeDateByUnit(date1, unit)
  const d2 = normalizeDateByUnit(date2, unit)
  return d1.getTime() > d2.getTime()
}

/**
 * Checks if the first date is before the second date.
 * @param date1 - The first date to compare
 * @param date2 - The second date to compare
 * @param unit - Optional time unit to normalize dates before comparison
 * @returns True if date1 is before date2, false otherwise
 */
export function isBefore(date1: Date, date2: Date, unit?: Types.TimeUnit): boolean {
  const d1 = normalizeDateByUnit(date1, unit)
  const d2 = normalizeDateByUnit(date2, unit)
  return d1.getTime() < d2.getTime()
}

/**
 * Checks if a date is between two other dates.
 * @param date - The date to check
 * @param start - The start date
 * @param end - The end date
 * @param unit - Optional time unit to normalize dates before comparison
 * @param inclusivity - Inclusivity mode ('[]', '[)', '(]', or '()')
 * @returns True if date is between start and end, false otherwise
 */
export function isBetween(
  date: Date,
  start: Date,
  end: Date,
  unit?: Types.TimeUnit,
  inclusivity: Types.Inclusivity = '[]'
): boolean {
  const normalized = normalizeDateByUnit(date, unit)
  const normalizedStart = normalizeDateByUnit(start, unit)
  const normalizedEnd = normalizeDateByUnit(end, unit)
  const startIncluded = inclusivity[0] === '['
  const endIncluded = inclusivity[1] === ']'
  const afterStart = startIncluded
    ? isSameOrAfter(normalized, normalizedStart, unit)
    : isAfter(normalized, normalizedStart, unit)
  const beforeEnd = endIncluded
    ? isSameOrBefore(normalized, normalizedEnd, unit)
    : isBefore(normalized, normalizedEnd, unit)
  return afterStart && beforeEnd
}

/**
 * Checks if two dates are the same.
 * @param date1 - The first date to compare
 * @param date2 - The second date to compare
 * @param unit - Optional time unit to normalize dates before comparison
 * @returns True if dates are the same, false otherwise
 */
export function isSame(date1: Date, date2: Date, unit?: Types.TimeUnit): boolean {
  const d1 = normalizeDateByUnit(date1, unit)
  const d2 = normalizeDateByUnit(date2, unit)
  return d1.getTime() === d2.getTime()
}

/**
 * Checks if the first date is the same as or after the second date.
 * @param date1 - The first date to compare
 * @param date2 - The second date to compare
 * @param unit - Optional time unit to normalize dates before comparison
 * @returns True if date1 is the same as or after date2, false otherwise
 */
export function isSameOrAfter(date1: Date, date2: Date, unit?: Types.TimeUnit): boolean {
  return isSame(date1, date2, unit) || isAfter(date1, date2, unit)
}

/**
 * Checks if the first date is the same as or before the second date.
 * @param date1 - The first date to compare
 * @param date2 - The second date to compare
 * @param unit - Optional time unit to normalize dates before comparison
 * @returns True if date1 is the same as or before date2, false otherwise
 */
export function isSameOrBefore(date1: Date, date2: Date, unit?: Types.TimeUnit): boolean {
  return isSame(date1, date2, unit) || isBefore(date1, date2, unit)
}

/**
 * Normalizes a date by the specified time unit.
 * @param date - The date to normalize
 * @param unit - Optional time unit to normalize the date
 * @returns Normalized date based on the unit
 */
function normalizeDateByUnit(date: Date, unit?: Types.TimeUnit): Date {
  if (!unit) {
    return date
  }
  const canonicalUnit = Helpers.getCanonicalUnit(unit)
  if (canonicalUnit === 'millisecond' || canonicalUnit === 'quarter') {
    return Helpers.cloneDate(date)
  }
  return Utils.startOf(date, unit)
}
