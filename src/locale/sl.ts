import type * as Types from '@app/Types.ts'

/**
 * Slovenian (sl) locale data.
 * @description Slovenian locale for Daytime library.
 */
export const sl: Types.LocaleData = {
  dayNames: [
    'Nedelja',
    'Ponedeljek',
    'Torek',
    'Sreda',
    'Četrtek',
    'Petek',
    'Sobota'
  ],
  dayNamesShort: ['Ned', 'Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob'],
  monthNames: [
    'Januar',
    'Februar',
    'Marec',
    'April',
    'Maj',
    'Junij',
    'Julij',
    'Avgust',
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
    'Avg',
    'Sep',
    'Okt',
    'Nov',
    'Dec'
  ],
  relative: {
    now: 'prav zdaj',
    past: 'pred {value} {unit}',
    future: 'čez {value} {unit}',
    units: {
      singular: {
        second: 'sekundo',
        minute: 'minuto',
        hour: 'uro',
        day: 'dan',
        week: 'teden',
        month: 'mesec',
        year: 'leto'
      },
      plural: {
        second: 'sekund',
        minute: 'minut',
        hour: 'ur',
        day: 'dni',
        week: 'tednov',
        month: 'mesecev',
        year: 'let'
      }
    }
  },
  code: 'sl'
}
