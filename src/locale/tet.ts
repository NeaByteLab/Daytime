import type * as Types from '@app/Types.ts'

/**
 * Tetum (tet) locale data.
 * @description Tetum locale for Daytime library.
 */
export const tet: Types.LocaleData = {
  dayNames: [
    'Loron-domingu',
    'Loron-segunda',
    'Loron-tersa',
    'Loron-kuarta',
    'Loron-kinta',
    'Loron-sesta',
    'Loron-sábadu'
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Kua', 'Kin', 'Ses', 'Sáb'],
  monthNames: [
    'Janeiru',
    'Fevereiru',
    'Marsu',
    'Abril',
    'Maiu',
    'Juñu',
    'Jullu',
    'Agustu',
    'Setembru',
    'Outubru',
    'Novembru',
    'Dezembru'
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Juñ',
    'Jul',
    'Agu',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ],
  relative: {
    now: 'agora',
    past: '{value} {unit} liuba',
    future: 'iha {value} {unit}',
    units: {
      singular: {
        second: 'segundu',
        minute: 'minutu',
        hour: 'oras',
        day: 'loron',
        week: 'semana',
        month: 'fulan',
        year: 'tinan'
      },
      plural: {
        second: 'segundu',
        minute: 'minutu',
        hour: 'oras',
        day: 'loron',
        week: 'semana',
        month: 'fulan',
        year: 'tinan'
      }
    }
  },
  code: 'tet'
}
