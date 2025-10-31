import type * as Types from '@app/Types.ts'

/**
 * Catalan (ca) locale data.
 * @description Catalan locale for Daytime library.
 */
export const ca: Types.LocaleData = {
  dayNames: [
    'Diumenge',
    'Dilluns',
    'Dimarts',
    'Dimecres',
    'Dijous',
    'Divendres',
    'Dissabte'
  ],
  dayNamesShort: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
  monthNames: [
    'Gener',
    'Febrer',
    'Març',
    'Abril',
    'Maig',
    'Juny',
    'Juliol',
    'Agost',
    'Setembre',
    'Octubre',
    'Novembre',
    'Desembre'
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
    'Des'
  ],
  relative: {
    now: 'ara',
    past: 'fa {value} {unit}',
    future: "d'aquí {value} {unit}",
    units: {
      singular: {
        second: 'segon',
        minute: 'minut',
        hour: 'hora',
        day: 'dia',
        week: 'setmana',
        month: 'mes',
        year: 'any'
      },
      plural: {
        second: 'segons',
        minute: 'minuts',
        hour: 'hores',
        day: 'dies',
        week: 'setmanes',
        month: 'mesos',
        year: 'anys'
      }
    }
  },
  code: 'ca'
}
