import * as Helpers from '@helpers/index.ts'

/**
 * Gets the end of ISO week for the given date.
 * @param date - The date to get end of ISO week for
 * @returns A new Date representing the end of the ISO week (23:59:59.999)
 */
export function endOfISOWeek(date: Date): Date {
  const start = startOfISOWeek(date)
  const end = Helpers.cloneDate(start)
  end.setDate(end.getDate() + 6)
  end.setHours(23, 59, 59, 999)
  return end
}

/**
 * Gets the end of month for the given date.
 * @param date - The date to get end of month for
 * @returns A new Date representing the last day of the month
 */
export function endOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

/**
 * Gets the start of ISO week for the given date.
 * @param date - The date to get start of ISO week for
 * @returns A new Date representing the start of the ISO week (00:00:00.000)
 */
export function startOfISOWeek(date: Date): Date {
  const newDate = Helpers.cloneDate(date)
  const day = date.getDay()
  const diff = day === 0 ? -6 : 1 - day
  newDate.setDate(newDate.getDate() + diff)
  newDate.setHours(0, 0, 0, 0)
  return newDate
}

/**
 * Gets the start of month for the given date.
 * @param date - The date to get start of month for
 * @returns A new Date representing the first day of the month
 */
export function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

/**
 * Gets the start of year for the given date.
 * @param date - The date to get start of year for
 * @returns A new Date representing the first day of the year
 */
export function startOfYear(date: Date): Date {
  return new Date(date.getFullYear(), 0, 1)
}
