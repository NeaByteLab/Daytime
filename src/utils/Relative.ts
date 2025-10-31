import * as Constants from '@app/Constant.ts'

/**
 * Gets a human-readable relative time string (e.g., "2 hours ago", "in 3 days").
 * @param date - The date to get relative time for
 * @param now - The reference date (defaults to current date)
 * @returns A relative time string
 */
export function getRelativeTime(date: Date, now: Date = new Date()): string {
  const diff = now.getTime() - date.getTime()
  const absDiff = Math.abs(diff)
  const isPast = diff > 0
  if (absDiff < Constants.relativeTimes.second) {
    return 'just now'
  }
  if (absDiff < Constants.relativeTimes.minute) {
    const seconds = Math.floor(absDiff / Constants.relativeTimes.second)
    return formatRelativeUnit(seconds, 'second', isPast)
  }
  if (absDiff < Constants.relativeTimes.hour) {
    const minutes = Math.floor(absDiff / Constants.relativeTimes.minute)
    return formatRelativeUnit(minutes, 'minute', isPast)
  }
  if (absDiff < Constants.relativeTimes.day) {
    const hours = Math.floor(absDiff / Constants.relativeTimes.hour)
    return formatRelativeUnit(hours, 'hour', isPast)
  }
  if (absDiff < Constants.relativeTimes.week) {
    const days = Math.floor(absDiff / Constants.relativeTimes.day)
    return formatRelativeUnit(days, 'day', isPast)
  }
  if (absDiff < Constants.relativeTimes.month) {
    const weeks = Math.floor(absDiff / Constants.relativeTimes.week)
    return formatRelativeUnit(weeks, 'week', isPast)
  }
  if (absDiff < Constants.relativeTimes.year) {
    const months = Math.floor(absDiff / Constants.relativeTimes.month)
    return formatRelativeUnit(months, 'month', isPast)
  }
  const years = Math.floor(absDiff / Constants.relativeTimes.year)
  return formatRelativeUnit(years, 'year', isPast)
}

/**
 * Formats a relative time unit string.
 * @param value - The numeric value
 * @param unit - The time unit name
 * @param isPast - Whether the time is in the past
 * @returns Formatted relative time string
 */
function formatRelativeUnit(value: number, unit: string, isPast: boolean): string {
  const plural = value !== 1 ? 's' : ''
  return isPast ? `${value} ${unit}${plural} ago` : `in ${value} ${unit}${plural}`
}
