import type * as Types from '@app/Types.ts'

/**
 * Polish (pl) locale data.
 * @description Polish locale for Daytime library.
 */
export const pl: Types.LocaleData = {
  dayNames: [
    'Niedziela',
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota'
  ],
  dayNamesShort: ['Nie', 'Pon', 'Wto', 'Śro', 'Czw', 'Pią', 'Sob'],
  monthNames: [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień'
  ],
  monthNamesShort: [
    'Sty',
    'Lut',
    'Mar',
    'Kwi',
    'Maj',
    'Cze',
    'Lip',
    'Sie',
    'Wrz',
    'Paź',
    'Lis',
    'Gru'
  ],
  relative: {
    now: 'właśnie teraz',
    past: '{value} {unit} temu',
    future: 'za {value} {unit}',
    units: {
      singular: {
        second: 'sekundę',
        minute: 'minutę',
        hour: 'godzinę',
        day: 'dzień',
        week: 'tydzień',
        month: 'miesiąc',
        year: 'rok'
      },
      plural: {
        second: 'sekund',
        minute: 'minut',
        hour: 'godzin',
        day: 'dni',
        week: 'tygodni',
        month: 'miesięcy',
        year: 'lat'
      }
    }
  },
  code: 'pl'
}
