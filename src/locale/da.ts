import type * as Types from '@app/Types.ts'

/**
 * Danish (da) locale data.
 * @description Danish locale for Daytime library.
 */
export const da: Types.LocaleData = {
  dayNames: [
    'Søndag',
    'Mandag',
    'Tirsdag',
    'Onsdag',
    'Torsdag',
    'Fredag',
    'Lørdag'
  ],
  dayNamesShort: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
  monthNames: [
    'Januar',
    'Februar',
    'Marts',
    'April',
    'Maj',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'December'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Maj',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dec'
  ],
  relative: {
    now: 'nu',
    past: 'for {value} {unit} siden',
    future: 'om {value} {unit}',
    units: {
      singular: {
        second: 'sekund',
        minute: 'minut',
        hour: 'time',
        day: 'dag',
        week: 'uge',
        month: 'måned',
        year: 'år'
      },
      plural: {
        second: 'sekunder',
        minute: 'minutter',
        hour: 'timer',
        day: 'dage',
        week: 'uger',
        month: 'måneder',
        year: 'år'
      }
    }
  },
  code: 'da'
}
