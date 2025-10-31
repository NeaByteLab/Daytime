/** Array of day names in English (Sunday through Saturday) */
export const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

/** Record mapping time unit names to their millisecond equivalents */
export const millisecondsPerUnit: Record<string, number> = {
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  millisecond: 1,
  minute: 60 * 1000,
  month: 30.44 * 24 * 60 * 60 * 1000,
  quarter: 91.32 * 24 * 60 * 60 * 1000,
  second: 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  year: 365.25 * 24 * 60 * 60 * 1000
}

/** Array of month names in English (January through December) */
export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

/** Object containing millisecond values for relative time calculations */
export const relativeTimes = {
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  month: 30 * 24 * 60 * 60 * 1000,
  second: 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  year: 365 * 24 * 60 * 60 * 1000
}

/** Record mapping various time unit string variations to their millisecond equivalents */
export const unitToMs: Record<string, number> = {
  d: 24 * 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  days: 24 * 60 * 60 * 1000,
  h: 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  hours: 60 * 60 * 1000,
  m: 60 * 1000,
  millisecond: 1,
  milliseconds: 1,
  minute: 60 * 1000,
  minutes: 60 * 1000,
  ms: 1,
  s: 1000,
  second: 1000,
  seconds: 1000,
  w: 7 * 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  weeks: 7 * 24 * 60 * 60 * 1000
}
