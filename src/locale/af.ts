import type * as Types from '@app/Types.ts'

/**
 * Afrikaans (af) locale data.
 * @description Afrikaans locale for Daytime library.
 */
export const af: Types.LocaleData = {
  dayNames: [
    'Sondag',
    'Maandag',
    'Dinsdag',
    'Woensdag',
    'Donderdag',
    'Vrydag',
    'Saterdag'
  ],
  dayNamesShort: ['Son', 'Maa', 'Din', 'Woe', 'Don', 'Vry', 'Sat'],
  monthNames: [
    'Januarie',
    'Februarie',
    'Maart',
    'April',
    'Mei',
    'Junie',
    'Julie',
    'Augustus',
    'September',
    'Oktober',
    'November',
    'Desember'
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
    'Des'
  ],
  relative: {
    now: 'nou',
    past: '{value} {unit} gelede',
    future: 'oor {value} {unit}',
    units: {
      singular: {
        second: 'sekonde',
        minute: 'minuut',
        hour: 'uur',
        day: 'dag',
        week: 'week',
        month: 'maand',
        year: 'jaar'
      },
      plural: {
        second: 'sekondes',
        minute: 'minute',
        hour: 'ure',
        day: 'dae',
        week: 'weke',
        month: 'maande',
        year: 'jaar'
      }
    }
  },
  code: 'af'
}
