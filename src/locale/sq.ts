import type * as Types from '@app/Types.ts'

/**
 * Albanian (sq) locale data.
 * @description Albanian locale for Daytime library.
 */
export const sq: Types.LocaleData = {
  dayNames: ['E Diel', 'E Hënë', 'E Martë', 'E Mërkurë', 'E Enjte', 'E Premte', 'E Shtunë'],
  dayNamesShort: ['Die', 'Hën', 'Mar', 'Mër', 'Enj', 'Pre', 'Sht'],
  monthNames: [
    'Janar',
    'Shkurt',
    'Mars',
    'Prill',
    'Maj',
    'Qershor',
    'Korrik',
    'Gusht',
    'Shtator',
    'Tetor',
    'Nëntor',
    'Dhjetor'
  ],
  monthNamesShort: [
    'Jan',
    'Shk',
    'Mar',
    'Pri',
    'Maj',
    'Qer',
    'Kor',
    'Gus',
    'Sht',
    'Tet',
    'Nën',
    'Dhj'
  ],
  relative: {
    now: 'tani',
    past: '{value} {unit} më parë',
    future: 'në {value} {unit}',
    units: {
      singular: {
        second: 'sekondë',
        minute: 'minutë',
        hour: 'orë',
        day: 'ditë',
        week: 'javë',
        month: 'muaj',
        year: 'vit'
      },
      plural: {
        second: 'sekonda',
        minute: 'minuta',
        hour: 'orë',
        day: 'ditë',
        week: 'java',
        month: 'muaj',
        year: 'vjet'
      }
    }
  },
  code: 'sq'
}
