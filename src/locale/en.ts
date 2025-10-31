import type * as Types from '@app/Types.ts'

/**
 * English (en) locale data.
 * @description Default locale for Daytime library.
 */
export const en: Types.LocaleData = {
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  monthNames: [
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
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ],
  relative: {
    now: 'just now',
    past: '{value} {unit} ago',
    future: 'in {value} {unit}',
    units: {
      singular: {
        second: 'second',
        minute: 'minute',
        hour: 'hour',
        day: 'day',
        week: 'week',
        month: 'month',
        year: 'year'
      },
      plural: {
        second: 'seconds',
        minute: 'minutes',
        hour: 'hours',
        day: 'days',
        week: 'weeks',
        month: 'months',
        year: 'years'
      }
    }
  },
  code: 'en'
}
