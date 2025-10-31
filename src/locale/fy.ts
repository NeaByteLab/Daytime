import type * as Types from '@app/Types.ts'

/**
 * Western Frisian (fy) locale data.
 * @description Western Frisian locale for Daytime library.
 */
export const fy: Types.LocaleData = {
  dayNames: ['Snein', 'Moandei', 'Tiisdei', 'Woansdei', 'Tongersdei', 'Freed', 'Sneon'],
  dayNamesShort: ['Sne', 'Moa', 'Tii', 'Woa', 'Ton', 'Fre', 'Sne'],
  monthNames: [
    'Jannewaris',
    'Febrewaris',
    'Maart',
    'April',
    'Maaie',
    'Juny',
    'July',
    'Augustus',
    'Septimber',
    'Oktober',
    'Novimber',
    'Desimber'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Maa',
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
    past: '{value} {unit} lyn',
    future: 'oer {value} {unit}',
    units: {
      singular: {
        second: 'sekonde',
        minute: 'minút',
        hour: 'oere',
        day: 'dei',
        week: 'wike',
        month: 'moanne',
        year: 'jier'
      },
      plural: {
        second: 'sekonden',
        minute: 'minuten',
        hour: 'oeren',
        day: 'dagen',
        week: 'wiken',
        month: 'moannen',
        year: 'jierren'
      }
    }
  },
  code: 'fy'
}
