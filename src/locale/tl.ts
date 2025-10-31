import type * as Types from '@app/Types.ts'

/**
 * Tagalog (tl) locale data.
 * @description Tagalog locale for Daytime library.
 */
export const tl: Types.LocaleData = {
  dayNames: ['Linggo', 'Lunes', 'Martes', 'Miyerkules', 'Huwebes', 'Biyernes', 'Sabado'],
  dayNamesShort: ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab'],
  monthNames: [
    'Enero',
    'Pebrero',
    'Marso',
    'Abril',
    'Mayo',
    'Hunyo',
    'Hulyo',
    'Agosto',
    'Setyembre',
    'Oktubre',
    'Nobyembre',
    'Disyembre'
  ],
  monthNamesShort: [
    'Ene',
    'Peb',
    'Mar',
    'Abr',
    'May',
    'Hun',
    'Hul',
    'Ago',
    'Set',
    'Okt',
    'Nob',
    'Dis'
  ],
  relative: {
    now: 'ngayon',
    past: '{value} {unit} ang nakalipas',
    future: 'sa {value} {unit}',
    units: {
      singular: {
        second: 'segundo',
        minute: 'minuto',
        hour: 'oras',
        day: 'araw',
        week: 'linggo',
        month: 'buwan',
        year: 'taon'
      },
      plural: {
        second: 'segundo',
        minute: 'minuto',
        hour: 'oras',
        day: 'araw',
        week: 'linggo',
        month: 'buwan',
        year: 'taon'
      }
    }
  },
  code: 'tl'
}
