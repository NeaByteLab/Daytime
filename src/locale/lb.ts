import type * as Types from '@app/Types.ts'

/**
 * Luxembourgish (lb) locale data.
 * @description Luxembourgish locale for Daytime library.
 */
export const lb: Types.LocaleData = {
  dayNames: ['Sonndeg', 'Méindeg', 'Dënschdeg', 'Mëttwoch', 'Donneschdeg', 'Freideg', 'Samschdeg'],
  dayNamesShort: ['Son', 'Méi', 'Dën', 'Mët', 'Don', 'Fre', 'Sam'],
  monthNames: [
    'Januar',
    'Februar',
    'Mäerz',
    'Abrëll',
    'Mee',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mäe',
    'Abr',
    'Mee',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dez'
  ],
  relative: {
    now: 'elo',
    past: 'virun {value} {unit}',
    future: 'a(n) {value} {unit}',
    units: {
      singular: {
        second: 'Sekonn',
        minute: 'Minutt',
        hour: 'Stonn',
        day: 'Dag',
        week: 'Woch',
        month: 'Mount',
        year: 'Joer'
      },
      plural: {
        second: 'Sekonnen',
        minute: 'Minutten',
        hour: 'Stonnen',
        day: 'Deeg',
        week: 'Wochen',
        month: 'Méint',
        year: 'Joer'
      }
    }
  },
  code: 'lb'
}
