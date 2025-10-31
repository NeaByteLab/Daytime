import type * as Types from '@app/Types.ts'

/**
 * Occitan (oc) locale data.
 * @description Occitan locale for Daytime library.
 */
export const oc: Types.LocaleData = {
  dayNames: ['Dimenge', 'Diluns', 'Dimars', 'Dimècres', 'Dijòus', 'Divendres', 'Dissabte'],
  dayNamesShort: ['Dim', 'Dil', 'Dim', 'Dimè', 'Dij', 'Div', 'Dis'],
  monthNames: [
    'Genièr',
    'Febrièr',
    'Març',
    'Abril',
    'Mai',
    'Junh',
    'Julhet',
    'Agost',
    'Setembre',
    'Octòbre',
    'Novembre',
    'Decembre'
  ],
  monthNamesShort: [
    'Gen',
    'Feb',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Oct',
    'Nov',
    'Dec'
  ],
  relative: {
    now: 'ara',
    past: 'fa {value} {unit}',
    future: 'dins {value} {unit}',
    units: {
      singular: {
        second: 'segonda',
        minute: 'minuta',
        hour: 'ora',
        day: 'jorn',
        week: 'setmana',
        month: 'mes',
        year: 'annada'
      },
      plural: {
        second: 'segondas',
        minute: 'minutas',
        hour: 'oras',
        day: 'jorns',
        week: 'setmanas',
        month: 'meses',
        year: 'annadas'
      }
    }
  },
  code: 'oc'
}
