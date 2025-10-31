import * as Constants from '@app/Constant.ts'
import * as Helpers from '@helpers/index.ts'

/**
 * Formats a date according to the specified pattern.
 * @param date - The date to format
 * @param pattern - The format pattern string
 * @returns The formatted date string
 */
export function formatDate(date: Date, pattern: string): string {
  const components = Helpers.extractDateComponents(date)
  const year = components.year
  const month = components.month
  const day = components.day
  const hour = components.hour
  const minute = components.minute
  const second = components.second
  const millisecond = components.millisecond
  const dayOfWeek = date.getDay()
  const dayName = Constants.dayNames[dayOfWeek] ?? 'Unknown'
  const monthName = Constants.monthNames[month - 1] ?? 'Unknown'
  const tokens: Record<string, string> = {
    YYYY: year.toString(),
    YY: (year % 100).toString().padStart(2, '0'),
    MM: Helpers.padNumber(month, 2),
    M: month.toString(),
    DD: Helpers.padNumber(day, 2),
    D: day.toString(),
    HH: Helpers.padNumber(hour, 2),
    H: hour.toString(),
    hh: Helpers.padNumber(hour % 12 || 12, 2),
    h: (hour % 12 || 12).toString(),
    mm: Helpers.padNumber(minute, 2),
    m: minute.toString(),
    ss: Helpers.padNumber(second, 2),
    s: second.toString(),
    SSS: Helpers.padNumber(millisecond, 3),
    SS: Helpers.padNumber(Math.floor(millisecond / 10), 2),
    S: Math.floor(millisecond / 100).toString(),
    dddd: dayName,
    ddd: dayName.substring(0, 3),
    dd: Helpers.padNumber(dayOfWeek, 2),
    d: dayOfWeek.toString(),
    MMMM: monthName,
    MMM: monthName.substring(0, 3),
    A: hour >= 12 ? 'PM' : 'AM',
    a: hour >= 12 ? 'pm' : 'am'
  }
  const placeholderStart = '\uE000'
  let result = pattern
  const sortedKeys = Object.keys(tokens).sort((a, b) => b.length - a.length)
  const replacements: Array<{ placeholder: string; value: string }> = []
  for (let i = 0; i < sortedKeys.length; i++) {
    const key = sortedKeys[i]
    if (key === undefined) {
      continue
    }
    const value = tokens[key]
    if (value !== undefined && result.includes(key)) {
      const placeholder = `${placeholderStart}${String.fromCharCode(0xe000 + i)}`
      replacements.push({ placeholder, value })
      result = result.replaceAll(key, placeholder)
    }
  }
  for (const { placeholder, value } of replacements) {
    result = result.replaceAll(placeholder, value)
  }
  return result
}
