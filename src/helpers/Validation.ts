import * as Helpers from '@helpers/index.ts'

/**
 * Checks if the given date is a business day (Monday-Friday).
 * @param date - The date to check
 * @returns True if the date is a business day, false otherwise
 */
export function isBusinessDay(date: Date): boolean {
  const dayOfWeek = date.getDay()
  return dayOfWeek >= 1 && dayOfWeek <= 5
}

/**
 * Checks if the given date is in daylight saving time.
 * @param date - The date to check
 * @returns True if the date is in DST, false otherwise
 */
export function isDST(date: Date): boolean {
  const january = Helpers.startOfYear(date)
  const july = new Date(date.getFullYear(), 6, 1)
  const janOffset = january.getTimezoneOffset()
  const julyOffset = july.getTimezoneOffset()
  const stdOffset = Math.max(janOffset, julyOffset)
  return date.getTimezoneOffset() < stdOffset
}

/**
 * Checks if the given date is valid.
 * @param date - The date to check
 * @returns True if the date is valid, false otherwise
 */
export function isValid(date: Date): boolean {
  return !isNaN(date.getTime())
}

/**
 * Checks if the year of the given date is a leap year.
 * @param date - The date to check
 * @returns True if the year is a leap year, false otherwise
 */
export function isLeapYear(date: Date): boolean {
  const year = date.getFullYear()
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

/**
 * Checks if the given date is a weekend (Saturday or Sunday).
 * @param date - The date to check
 * @returns True if the date is a weekend, false otherwise
 */
export function isWeekend(date: Date): boolean {
  const dayOfWeek = date.getDay()
  return dayOfWeek === 0 || dayOfWeek === 6
}
