import type * as Types from '@app/Types.ts'

/**
 * Dutch (nl) locale data.
 * @description Dutch locale for Daytime library.
 */
export const nl: Types.LocaleData = {
  dayNames: [
    'Zondag',
    'Maandag',
    'Dinsdag',
    'Woensdag',
    'Donderdag',
    'Vrijdag',
    'Zaterdag'
  ],
  dayNamesShort: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
  monthNames: [
    'Januari',
    'Februari',
    'Maart',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Augustus',
    'September',
    'Oktober',
    'November',
    'December'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mrt',
    'Apr',
    'Mei',
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
    past: '{value} {unit} geleden',
    future: 'over {value} {unit}',
    units: {
      singular: {
        second: 'seconde',
        minute: 'minuut',
        hour: 'uur',
        day: 'dag',
        week: 'week',
        month: 'maand',
        year: 'jaar'
      },
      plural: {
        second: 'seconden',
        minute: 'minuten',
        hour: 'uren',
        day: 'dagen',
        week: 'weken',
        month: 'maanden',
        year: 'jaren'
      }
    }
  },
  code: 'nl'
}
