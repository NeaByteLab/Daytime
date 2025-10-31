import type * as Types from '@app/Types.ts'

/**
 * Talossan (tzl) locale data.
 * @description Talossan locale for Daytime library.
 */
export const tzl: Types.LocaleData = {
  dayNames: ["S'ul", 'Lúneç', 'Marti', 'Mírcúles', 'Xhúadi', 'Viénerç', 'Sátuir'],
  dayNamesShort: ["S'ul", 'Lún', 'Mar', 'Mír', 'Xhú', 'Vié', 'Sát'],
  monthNames: [
    'Januar',
    "Fevr'arh",
    'Març',
    'Aprail',
    'Mai',
    'Jún',
    'Júl',
    'August',
    'Septembarh',
    'Octubarh',
    'Novembarh',
    'Decembarh'
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Apr',
    'Mai',
    'Jún',
    'Júl',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ],
  relative: {
    now: 'or',
    past: '{value} {unit} passat',
    future: 'in {value} {unit}',
    units: {
      singular: {
        second: 'secunç',
        minute: 'minúth',
        hour: 'ora',
        day: 'ziua',
        week: 'setemána',
        month: 'mes',
        year: 'an'
      },
      plural: {
        second: 'secuns',
        minute: 'minúths',
        hour: 'ores',
        day: 'zíuas',
        week: 'setemánas',
        month: 'meses',
        year: 'ans'
      }
    }
  },
  code: 'tzl'
}
