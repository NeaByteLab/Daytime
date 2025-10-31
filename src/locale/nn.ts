import type * as Types from '@app/Types.ts'

/**
 * Norwegian Nynorsk (nn) locale data.
 * @description Norwegian Nynorsk locale for Daytime library.
 */
export const nn: Types.LocaleData = {
  dayNames: ['Søndag', 'Måndag', 'Tysdag', 'Onsdag', 'Torsdag', 'Fredag', 'Laurdag'],
  dayNamesShort: ['Søn', 'Mån', 'Tys', 'Ons', 'Tor', 'Fre', 'Lau'],
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
    now: 'no',
    past: 'for {value} {unit} sidan',
    future: 'om {value} {unit}',
    units: {
      singular: {
        second: 'sekund',
        minute: 'minutt',
        hour: 'time',
        day: 'dag',
        week: 'veke',
        month: 'månad',
        year: 'år'
      },
      plural: {
        second: 'sekund',
        minute: 'minutt',
        hour: 'timar',
        day: 'dagar',
        week: 'veker',
        month: 'månader',
        year: 'år'
      }
    }
  },
  code: 'nn'
}
