import * as Helpers from '@helpers/index.ts'
import * as Locale from '@locale/index.ts'

/**
 * Formats a date according to the specified pattern.
 * @param date - The date to format
 * @param pattern - The format pattern string
 * @param localeCode - Optional locale code (defaults to default locale)
 * @returns The formatted date string
 */
export function formatDate(date: Date, pattern: string, localeCode?: string): string {
  const locale = Locale.getLocale(localeCode)
  const components = Helpers.extractDateComponents(date)
  const year = components.year
  const month = components.month
  const day = components.day
  const hour = components.hour
  const minute = components.minute
  const second = components.second
  const millisecond = components.millisecond
  const dayOfWeek = date.getDay()
  const dayName = locale.dayNames[dayOfWeek] ?? 'Unknown'
  const dayNameShort = locale.dayNamesShort[dayOfWeek] ?? 'Unknown'
  const monthName = locale.monthNames[month - 1] ?? 'Unknown'
  const monthNameShort = locale.monthNamesShort[month - 1] ?? 'Unknown'
  const offsetMinutes = Helpers.getTimezoneOffset(date)
  const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60)
  const offsetMins = Math.abs(offsetMinutes) % 60
  const offsetSign = offsetMinutes >= 0 ? '+' : '-'
  const offsetString = `${offsetSign}${Helpers.padNumber(offsetHours, 2)}${
    Helpers.padNumber(
      offsetMins,
      2
    )
  }`
  const offsetStringColon = `${offsetSign}${Helpers.padNumber(offsetHours, 2)}:${
    Helpers.padNumber(
      offsetMins,
      2
    )
  }`
  const unixSeconds = Math.floor(date.getTime() / 1000)
  const unixMilliseconds = date.getTime()
  const tokens: Record<string, string> = {
    A: hour >= 12 ? 'PM' : 'AM',
    D: day.toString(),
    DD: Helpers.padNumber(day, 2),
    Do: Helpers.toOrdinal(day),
    H: hour.toString(),
    HH: Helpers.padNumber(hour, 2),
    M: month.toString(),
    MM: Helpers.padNumber(month, 2),
    MMM: monthNameShort,
    MMMM: monthName,
    S: Math.floor(millisecond / 100).toString(),
    SS: Helpers.padNumber(Math.floor(millisecond / 10), 2),
    SSS: Helpers.padNumber(millisecond, 3),
    X: unixSeconds.toString(),
    YY: (year % 100).toString().padStart(2, '0'),
    YYYY: year.toString(),
    Z: offsetStringColon,
    ZZ: offsetString,
    a: hour >= 12 ? 'pm' : 'am',
    d: dayOfWeek.toString(),
    dd: Helpers.padNumber(dayOfWeek, 2),
    ddd: dayNameShort,
    dddd: dayName,
    h: (hour % 12 || 12).toString(),
    hh: Helpers.padNumber(hour % 12 || 12, 2),
    m: minute.toString(),
    mm: Helpers.padNumber(minute, 2),
    s: second.toString(),
    ss: Helpers.padNumber(second, 2),
    x: unixMilliseconds.toString()
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
    if (value === undefined) {
      continue
    }
    if (key.length === 1) {
      const char = key[0]
      if (char === undefined) {
        continue
      }
      let searchStart = 0
      while (true) {
        const index = result.indexOf(char, searchStart)
        if (index === -1) {
          break
        }
        const prevChar = index > 0 ? result[index - 1] : ''
        const nextChar = index < result.length - 1 ? result[index + 1] : ''
        const isPrevAlpha = /[a-zA-Z]/.test(prevChar ?? '')
        const isNextAlpha = /[a-zA-Z]/.test(nextChar ?? '')
        if (!isPrevAlpha && !isNextAlpha) {
          const placeholder = `${placeholderStart}${String.fromCharCode(0xe000 + i)}`
          replacements.push({ placeholder, value })
          result = result.substring(0, index) + placeholder + result.substring(index + 1)
          searchStart = index + placeholder.length
        } else {
          searchStart = index + 1
        }
      }
    } else {
      if (result.includes(key)) {
        const placeholder = `${placeholderStart}${String.fromCharCode(0xe000 + i)}`
        replacements.push({ placeholder, value })
        result = result.replaceAll(key, placeholder)
      }
    }
  }
  for (const { placeholder, value } of replacements) {
    result = result.replaceAll(placeholder, value)
  }
  return result
}
