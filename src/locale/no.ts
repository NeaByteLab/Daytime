import type * as Types from '@app/Types.ts'

/**
 * Norwegian (no) locale data.
 * @description Norwegian locale for Daytime library.
 */
export const no: Types.LocaleData = {
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
    'Mars',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Desember'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mai',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Des'
  ],
  relative: {
    now: 'nå',
    past: 'for {value} {unit} siden',
    future: 'om {value} {unit}',
    units: {
      singular: {
        second: 'sekund',
        minute: 'minutt',
        hour: 'time',
        day: 'dag',
        week: 'uke',
        month: 'måned',
        year: 'år'
      },
      plural: {
        second: 'sekunder',
        minute: 'minutter',
        hour: 'timer',
        day: 'dager',
        week: 'uker',
        month: 'måneder',
        year: 'år'
      }
    }
  },
  code: 'no'
}
