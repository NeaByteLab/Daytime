import type * as Types from '@app/Types.ts'

/**
 * Swedish (sv) locale data.
 * @description Swedish locale for Daytime library.
 */
export const sv: Types.LocaleData = {
  dayNames: [
    'Söndag',
    'Måndag',
    'Tisdag',
    'Onsdag',
    'Torsdag',
    'Fredag',
    'Lördag'
  ],
  dayNamesShort: ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'],
  monthNames: [
    'Januari',
    'Februari',
    'Mars',
    'April',
    'Maj',
    'Juni',
    'Juli',
    'Augusti',
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
    past: 'för {value} {unit} sedan',
    future: 'om {value} {unit}',
    units: {
      singular: {
        second: 'sekund',
        minute: 'minut',
        hour: 'timme',
        day: 'dag',
        week: 'vecka',
        month: 'månad',
        year: 'år'
      },
      plural: {
        second: 'sekunder',
        minute: 'minuter',
        hour: 'timmar',
        day: 'dagar',
        week: 'veckor',
        month: 'månader',
        year: 'år'
      }
    }
  },
  code: 'sv'
}
