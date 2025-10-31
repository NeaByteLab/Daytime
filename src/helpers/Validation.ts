import * as Helpers from '@helpers/index.ts'

/**
 * Counts the number of business days in the month for the given date.
 * @param date - The date to count business days for
 * @returns The number of business days in the month
 */
export function businessDaysInMonth(date: Date): number {
  const startOfMonth = Helpers.startOfMonth(date)
  const endOfMonth = Helpers.endOfMonth(date)
  let count = 0
  const current = new Date(startOfMonth)
  while (current <= endOfMonth) {
    if (isBusinessDay(current)) {
      count++
    }
    current.setDate(current.getDate() + 1)
  }
  return count
}

/**
 * Counts the number of business days in the year for the given date.
 * @param date - The date to count business days for
 * @returns The number of business days in the year
 */
export function businessDaysInYear(date: Date): number {
  const startOfYear = Helpers.startOfYear(date)
  const endOfYear = new Date(date.getFullYear(), 11, 31)
  let count = 0
  const current = new Date(startOfYear)
  while (current <= endOfYear) {
    if (isBusinessDay(current)) {
      count++
    }
    current.setDate(current.getDate() + 1)
  }
  return count
}

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

/**
 * Gets the next business day from the given date.
 * @param date - The date to get next business day for
 * @returns A new Date representing the next business day
 */
export function nextBusinessDay(date: Date): Date {
  const next = Helpers.cloneDate(date)
  next.setDate(next.getDate() + 1)
  while (!isBusinessDay(next)) {
    next.setDate(next.getDate() + 1)
  }
  return next
}

/**
 * Gets the previous business day from the given date.
 * @param date - The date to get previous business day for
 * @returns A new Date representing the previous business day
 */
export function prevBusinessDay(date: Date): Date {
  const prev = Helpers.cloneDate(date)
  prev.setDate(prev.getDate() - 1)
  while (!isBusinessDay(prev)) {
    prev.setDate(prev.getDate() - 1)
  }
  return prev
}
