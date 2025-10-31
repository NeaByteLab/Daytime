import * as Constants from '@app/Constant.ts'
import * as Locale from '@locale/index.ts'

/**
 * Gets a human-readable relative time string (e.g., "2 hours ago", "in 3 days").
 * @param date - The date to get relative time for
 * @param localeCode - Optional locale code (defaults to default locale)
 * @returns A relative time string
 */
export function getRelativeTime(date: Date, localeCode?: string): string {
  const locale = Locale.getLocale(localeCode)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const absDiff = Math.abs(diff)
  const isPast = diff > 0
  if (absDiff < Constants.relativeTimes.second) {
    return locale.relative.now
  }
  if (absDiff < Constants.relativeTimes.minute) {
    const seconds = Math.floor(absDiff / Constants.relativeTimes.second)
    return formatRelativeUnit(seconds, 'second', isPast, locale)
  }
  if (absDiff < Constants.relativeTimes.hour) {
    const minutes = Math.floor(absDiff / Constants.relativeTimes.minute)
    return formatRelativeUnit(minutes, 'minute', isPast, locale)
  }
  if (absDiff < Constants.relativeTimes.day) {
    const hours = Math.floor(absDiff / Constants.relativeTimes.hour)
    return formatRelativeUnit(hours, 'hour', isPast, locale)
  }
  if (absDiff < Constants.relativeTimes.week) {
    const days = Math.floor(absDiff / Constants.relativeTimes.day)
    return formatRelativeUnit(days, 'day', isPast, locale)
  }
  if (absDiff < Constants.relativeTimes.month) {
    const weeks = Math.floor(absDiff / Constants.relativeTimes.week)
    return formatRelativeUnit(weeks, 'week', isPast, locale)
  }
  if (absDiff < Constants.relativeTimes.year) {
    const months = Math.floor(absDiff / Constants.relativeTimes.month)
    return formatRelativeUnit(months, 'month', isPast, locale)
  }
  const years = Math.floor(absDiff / Constants.relativeTimes.year)
  return formatRelativeUnit(years, 'year', isPast, locale)
}

/**
 * Formats a relative time unit string using locale data.
 * @param value - The numeric value
 * @param unit - The time unit name ('second', 'minute', 'hour', 'day', 'week', 'month', 'year')
 * @param isPast - Whether the time is in the past
 * @param locale - The locale data
 * @returns Formatted relative time string
 */
function formatRelativeUnit(
  value: number,
  unit: 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year',
  isPast: boolean,
  locale: ReturnType<typeof Locale.getLocale>
): string {
  const unitText = value === 1
    ? locale.relative.units.singular[unit]
    : locale.relative.units.plural[unit]
  const template = isPast ? locale.relative.past : locale.relative.future
  return template.replace('{value}', value.toString()).replace('{unit}', unitText)
}
