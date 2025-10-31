import type * as Types from '@app/Types.ts'

/**
 * Estonian (et) locale data.
 * @description Estonian locale for Daytime library.
 */
export const et: Types.LocaleData = {
  dayNames: ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'],
  dayNamesShort: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
  monthNames: [
    'Jaanuar',
    'Veebruar',
    'Märts',
    'Aprill',
    'Mai',
    'Juuni',
    'Juuli',
    'August',
    'September',
    'Oktoober',
    'November',
    'Detsember'
  ],
  monthNamesShort: [
    'Jaan',
    'Veebr',
    'Märts',
    'Apr',
    'Mai',
    'Juuni',
    'Juuli',
    'Aug',
    'Sept',
    'Okt',
    'Nov',
    'Dets'
  ],
  relative: {
    now: 'just nüüd',
    past: '{value} {unit} tagasi',
    future: '{value} {unit} pärast',
    units: {
      singular: {
        second: 'sekund',
        minute: 'minut',
        hour: 'tund',
        day: 'päev',
        week: 'nädal',
        month: 'kuu',
        year: 'aasta'
      },
      plural: {
        second: 'sekundit',
        minute: 'minutit',
        hour: 'tundi',
        day: 'päeva',
        week: 'nädalat',
        month: 'kuud',
        year: 'aastat'
      }
    }
  },
  code: 'et'
}
