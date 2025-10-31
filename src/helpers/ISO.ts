import * as Constants from '@app/Constant.ts'
import * as Helpers from '@helpers/index.ts'

/**
 * Gets the ISO week number for the given date.
 * @param date - The date to get ISO week number for
 * @returns The ISO week number (1-53)
 * @throws {Error} When millisecond constant for week is invalid
 */
export function isoWeek(date: Date): number {
  const target = Helpers.cloneDate(date)
  const dayNumber = (date.getDay() + 6) % 7
  target.setDate(target.getDate() - dayNumber + 3)
  const firstThursday = target.getTime()
  target.setMonth(0, 1)
  if (target.getDay() !== 4) {
    target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7))
  }
  const msPerWeek = Constants.millisecondsPerUnit['week']
  if (msPerWeek === undefined) {
    throw new Error('Invalid millisecond constant for week')
  }
  return 1 + Math.ceil((firstThursday - target.getTime()) / msPerWeek)
}

/**
 * Gets the ISO weekday number for the given date (1-7, Monday is 1).
 * @param date - The date to get ISO weekday for
 * @returns The ISO weekday number (1-7)
 */
export function isoWeekday(date: Date): number {
  const day = date.getDay()
  return day === 0 ? 7 : day
}

/**
 * Gets the number of ISO weeks in the given year.
 * @param year - The year to get ISO weeks count for
 * @returns The number of ISO weeks in the year (52 or 53)
 * @throws {Error} When millisecond constant for week is invalid
 */
export function isoWeeksInYear(year: number): number {
  const fourthJan = new Date(year, 0, 4)
  const dayNumber = (fourthJan.getDay() + 6) % 7
  const firstThursday = Helpers.cloneDate(fourthJan)
  firstThursday.setDate(firstThursday.getDate() - dayNumber + 3)
  const fourthJanNext = new Date(year + 1, 0, 4)
  const dayNumberNext = (fourthJanNext.getDay() + 6) % 7
  const firstThursdayNext = Helpers.cloneDate(fourthJanNext)
  firstThursdayNext.setDate(firstThursdayNext.getDate() - dayNumberNext + 3)
  const msPerWeek = Constants.millisecondsPerUnit['week']
  if (msPerWeek === undefined) {
    throw new Error('Invalid millisecond constant for week')
  }
  return Math.round((firstThursdayNext.getTime() - firstThursday.getTime()) / msPerWeek) + 1
}

/**
 * Gets the ISO week year for the given date.
 * @param date - The date to get ISO week year for
 * @returns The ISO week year
 */
export function isoWeekYear(date: Date): number {
  const target = Helpers.cloneDate(date)
  const dayNumber = (date.getDay() + 6) % 7
  target.setDate(target.getDate() - dayNumber + 3)
  return target.getFullYear()
}
