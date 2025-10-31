import type * as Types from '@app/Types.ts'

/**
 * Creates a clone of the given date.
 * @param date - The date to clone
 * @returns A new Date object with the same timestamp
 */
export function cloneDate(date: Date): Date {
  return new Date(date.getTime())
}

/**
 * Creates a UTC date from individual components.
 * @param year - The year
 * @param month - The month (0-11)
 * @param day - The day of month
 * @param hour - The hour (0-23)
 * @param minute - The minute (0-59)
 * @param second - The second (0-59)
 * @param millisecond - The millisecond (0-999)
 * @returns A new Date object in UTC
 */
export function createUTCDate(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
  millisecond: number
): Date {
  return new Date(Date.UTC(year, month, day, hour, minute, second, millisecond))
}

/**
 * Extracts date components from a date object.
 * @param date - The date to extract components from
 * @returns An object containing year, month, day, hour, minute, second, and millisecond
 */
export function extractDateComponents(date: Date): Types.DateComponents {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds()
  }
}

/**
 * Extracts UTC date components from a date object.
 * @param date - The date to extract UTC components from
 * @returns An object containing UTC year, month, day, hour, minute, second, and millisecond
 */
export function extractUTCDateComponents(date: Date): Types.DateComponents {
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds(),
    millisecond: date.getUTCMilliseconds()
  }
}

/**
 * Parses Intl.DateTimeFormat parts into date components.
 * @param parts - Array of DateTimeFormatPart objects
 * @returns Parsed date parts object or null if required parts are missing
 */
export function parseDateParts(parts: Intl.DateTimeFormatPart[]): Types.DateParts | null {
  const yearPart = parts.find((p) => p.type === 'year')
  const monthPart = parts.find((p) => p.type === 'month')
  const dayPart = parts.find((p) => p.type === 'day')
  const hourPart = parts.find((p) => p.type === 'hour')
  const minutePart = parts.find((p) => p.type === 'minute')
  const secondPart = parts.find((p) => p.type === 'second')
  if (!yearPart || !monthPart || !dayPart || !hourPart || !minutePart || !secondPart) {
    return null
  }
  return {
    year: parseInt(yearPart.value, 10),
    month: parseInt(monthPart.value, 10) - 1,
    day: parseInt(dayPart.value, 10),
    hour: parseInt(hourPart.value, 10),
    minute: parseInt(minutePart.value, 10),
    second: parseInt(secondPart.value, 10)
  }
}
