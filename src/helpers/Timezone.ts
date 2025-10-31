import * as Helpers from '@helpers/index.ts'

/**
 * Converts a date to the specified timezone.
 * @param date - The date to convert
 * @param timezone - The target timezone (IANA timezone identifier)
 * @returns A new Date object adjusted to the specified timezone
 */
export function convertToTimezone(date: Date, timezone: string): Date {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })
    const parts = formatter.formatToParts(date)
    const targetParts = Helpers.parseDateParts(parts)
    if (!targetParts) {
      return Helpers.cloneDate(date)
    }
    const ms = date.getMilliseconds()
    const formatterUtc = new Intl.DateTimeFormat('en-US', {
      timeZone: 'UTC',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })
    const utcParts = formatterUtc.formatToParts(date)
    const utcPartsParsed = Helpers.parseDateParts(utcParts)
    if (!utcPartsParsed) {
      return Helpers.cloneDate(date)
    }
    const utcTime = Helpers.createUTCDate(
      utcPartsParsed.year,
      utcPartsParsed.month,
      utcPartsParsed.day,
      utcPartsParsed.hour,
      utcPartsParsed.minute,
      utcPartsParsed.second,
      ms
    ).getTime()
    const targetTime = Helpers.createUTCDate(
      targetParts.year,
      targetParts.month,
      targetParts.day,
      targetParts.hour,
      targetParts.minute,
      targetParts.second,
      ms
    ).getTime()
    const offset = targetTime - utcTime
    return new Date(date.getTime() + offset)
  } catch {
    return Helpers.cloneDate(date)
  }
}

/**
 * Gets the current system timezone.
 * @returns The IANA timezone identifier, or 'UTC' if unable to determine
 */
export function getTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  } catch {
    return 'UTC'
  }
}

/**
 * Gets the timezone offset in minutes for the given date.
 * @param date - The date to get timezone offset for
 * @returns The timezone offset in minutes
 */
export function getTimezoneOffset(date: Date): number {
  return -date.getTimezoneOffset()
}

/**
 * Checks if the given date is in UTC timezone.
 * @param date - The date to check
 * @returns True if the date is in UTC, false otherwise
 */
export function isUTC(date: Date): boolean {
  return date.getTimezoneOffset() === 0
}

/**
 * Converts a date to local timezone.
 * @param date - The date to convert to local timezone
 * @returns A new Date object in local timezone
 */
export function toLocal(date: Date): Date {
  return Helpers.cloneDate(date)
}
