import type * as Types from '@app/Types.ts'

/**
 * Swahili (sw) locale data.
 * @description Swahili locale for Daytime library.
 */
export const sw: Types.LocaleData = {
  dayNames: ['Jumapili', 'Jumatatu', 'Jumanne', 'Jumatano', 'Alhamisi', 'Ijumaa', 'Jumamosi'],
  dayNamesShort: ['Jpl', 'Jtat', 'Jnne', 'Jtan', 'Alh', 'Ijm', 'Jmos'],
  monthNames: [
    'Januari',
    'Februari',
    'Machi',
    'Aprili',
    'Mei',
    'Juni',
    'Julai',
    'Agosti',
    'Septemba',
    'Oktoba',
    'Novemba',
    'Desemba'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mac',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Okt',
    'Nov',
    'Des'
  ],
  relative: {
    now: 'sasa',
    past: 'miaka {value} {unit} iliyopita',
    future: 'baada ya {value} {unit}',
    units: {
      singular: {
        second: 'sekunde',
        minute: 'dakika',
        hour: 'saa',
        day: 'siku',
        week: 'wiki',
        month: 'mwezi',
        year: 'mwaka'
      },
      plural: {
        second: 'sekunde',
        minute: 'dakika',
        hour: 'masaa',
        day: 'siku',
        week: 'wiki',
        month: 'miezi',
        year: 'miaka'
      }
    }
  },
  code: 'sw'
}
