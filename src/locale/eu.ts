import type * as Types from '@app/Types.ts'

/**
 * Basque (eu) locale data.
 * @description Basque locale for Daytime library.
 */
export const eu: Types.LocaleData = {
  dayNames: [
    'Igandea',
    'Astelehena',
    'Asteartea',
    'Asteazkena',
    'Osteguna',
    'Ostirala',
    'Larunbata'
  ],
  dayNamesShort: ['Ig', 'Al', 'Ar', 'Az', 'Og', 'Or', 'Lr'],
  monthNames: [
    'Urtarrila',
    'Otsaila',
    'Martxoa',
    'Apirila',
    'Maiatza',
    'Ekaina',
    'Uztaila',
    'Abuztua',
    'Iraila',
    'Urria',
    'Azaroa',
    'Abendua'
  ],
  monthNamesShort: [
    'Urt',
    'Ots',
    'Mar',
    'Api',
    'Mai',
    'Eka',
    'Uzt',
    'Abu',
    'Ira',
    'Urr',
    'Aza',
    'Abe'
  ],
  relative: {
    now: 'orain',
    past: 'duela {value} {unit}',
    future: '{value} {unit} barru',
    units: {
      singular: {
        second: 'segundu',
        minute: 'minutu',
        hour: 'ordu',
        day: 'egun',
        week: 'aste',
        month: 'hilabete',
        year: 'urte'
      },
      plural: {
        second: 'segundo',
        minute: 'minutu',
        hour: 'ordu',
        day: 'egun',
        week: 'aste',
        month: 'hilabete',
        year: 'urte'
      }
    }
  },
  code: 'eu'
}
