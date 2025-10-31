import * as Constants from '@app/Constant.ts'
import * as Helpers from '@helpers/index.ts'

/**
 * Calculates the week number for the given date.
 * @param date - The date to calculate week number for
 * @returns The week number (at least 1)
 * @throws {Error} When millisecond constant for day is invalid
 */
export function calculateWeekNumber(date: Date): number {
  const startOfYearDate = Helpers.startOfYear(date)
  const msPerDay = Constants.millisecondsPerUnit['day']
  if (msPerDay === undefined) {
    throw new Error('Invalid millisecond constant for day')
  }
  const dayOfYear = Math.floor((date.getTime() - startOfYearDate.getTime()) / msPerDay)
  const weekNumber = Math.floor((dayOfYear + startOfYearDate.getDay()) / 7) + 1
  return Math.max(1, weekNumber)
}

/**
 * Gets the day of week for the given date (0-6, Sunday is 0).
 * @param date - The date to get day of week for
 * @returns The day of week (0-6)
 */
export function dayOfWeek(date: Date): number {
  return date.getDay()
}

/**
 * Gets the day of year for the given date (1-366).
 * @param date - The date to get day of year for
 * @returns The day of year (1-366)
 * @throws {Error} When millisecond constant for day is invalid
 */
export function dayOfYear(date: Date): number {
  const startOfYearDate = Helpers.startOfYear(date)
  const diff = date.getTime() - startOfYearDate.getTime()
  const msPerDay = Constants.millisecondsPerUnit['day']
  if (msPerDay === undefined) {
    throw new Error('Invalid millisecond constant for day')
  }
  return Math.floor(diff / msPerDay) + 1
}

/**
 * Gets the number of days in the month for the given date.
 * @param date - The date to get days in month for
 * @returns The number of days in the month (28-31)
 */
export function daysInMonth(date: Date): number {
  return Helpers.endOfMonth(date).getDate()
}

/**
 * Gets the number of days in the year for the given date.
 * @param date - The date to get days in year for
 * @returns The number of days in the year (365 or 366)
 */
export function daysInYear(date: Date): number {
  return Helpers.isLeapYear(date) ? 366 : 365
}

/**
 * Gets the week number within the month for the given date.
 * @param date - The date to get week of month for
 * @returns The week number within the month
 */
export function weekOfMonth(date: Date): number {
  const firstDayOfMonth = Helpers.startOfMonth(date)
  const dayOfMonth = date.getDate()
  const firstDayOfWeek = firstDayOfMonth.getDay()
  return Math.ceil((dayOfMonth + firstDayOfWeek) / 7)
}

/**
 * Gets the number of weeks in the month for the given date.
 * @param date - The date to get weeks in month for
 * @returns The number of weeks in the month
 */
export function weeksInMonth(date: Date): number {
  const firstDayOfMonth = Helpers.startOfMonth(date)
  const lastDayOfMonth = Helpers.endOfMonth(date)
  const firstDayOfWeek = firstDayOfMonth.getDay()
  const daysInMonthValue = lastDayOfMonth.getDate()
  return Math.ceil((daysInMonthValue + firstDayOfWeek) / 7)
}

/**
 * Gets the number of weeks in the year for the given date.
 * @param date - The date to get weeks in year for
 * @returns The number of weeks in the year (at least 52)
 */
export function weeksInYear(date: Date): number {
  const firstDayOfYear = Helpers.startOfYear(date)
  const firstDayOfWeek = firstDayOfYear.getDay()
  const totalDays = Helpers.isLeapYear(date) ? 366 : 365
  const weeks = Math.ceil((totalDays + firstDayOfWeek) / 7)
  return Math.max(52, weeks)
}
