import type * as Types from '@app/Types.ts'

/**
 * Montenegrin (me) locale data.
 * @description Montenegrin locale for Daytime library.
 */
export const me: Types.LocaleData = {
  dayNames: ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota'],
  dayNamesShort: ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'],
  monthNames: [
    'Januar',
    'Februar',
    'Mart',
    'April',
    'Maj',
    'Jun',
    'Jul',
    'Avgust',
    'Septembar',
    'Oktobar',
    'Novembar',
    'Decembar'
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
    now: 'sada',
    past: 'prije {value} {unit}',
    future: 'za {value} {unit}',
    units: {
      singular: {
        second: 'sekundu',
        minute: 'minutu',
        hour: 'sat',
        day: 'dan',
        week: 'nedjelju',
        month: 'mjesec',
        year: 'godinu'
      },
      plural: {
        second: 'sekundi',
        minute: 'minuta',
        hour: 'sati',
        day: 'dana',
        week: 'nedjelja',
        month: 'mjeseci',
        year: 'godina'
      }
    }
  },
  code: 'me'
}
