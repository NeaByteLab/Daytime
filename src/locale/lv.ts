import type * as Types from '@app/Types.ts'

/**
 * Latvian (lv) locale data.
 * @description Latvian locale for Daytime library.
 */
export const lv: Types.LocaleData = {
  dayNames: [
    'Svētdiena',
    'Pirmdiena',
    'Otrdiena',
    'Trešdiena',
    'Ceturtdiena',
    'Piektdiena',
    'Sestdiena'
  ],
  dayNamesShort: ['Sv', 'Pr', 'Ot', 'Tr', 'Ce', 'Pk', 'Se'],
  monthNames: [
    'Janvāris',
    'Februāris',
    'Marts',
    'Aprīlis',
    'Maijs',
    'Jūnijs',
    'Jūlijs',
    'Augusts',
    'Septembris',
    'Oktobris',
    'Novembris',
    'Decembris'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mai',
    'Jūn',
    'Jūl',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dec'
  ],
  relative: {
    now: 'tagad',
    past: 'pirms {value} {unit}',
    future: 'pēc {value} {unit}',
    units: {
      singular: {
        second: 'sekundes',
        minute: 'minūtes',
        hour: 'stundas',
        day: 'dienas',
        week: 'nedēļas',
        month: 'mēneša',
        year: 'gada'
      },
      plural: {
        second: 'sekundēm',
        minute: 'minūtēm',
        hour: 'stundām',
        day: 'dienām',
        week: 'nedēļām',
        month: 'mēnešiem',
        year: 'gadiem'
      }
    }
  },
  code: 'lv'
}
