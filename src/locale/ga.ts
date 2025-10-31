import type * as Types from '@app/Types.ts'

/**
 * Irish (ga) locale data.
 * @description Irish locale for Daytime library.
 */
export const ga: Types.LocaleData = {
  dayNames: [
    'Dé Domhnaigh',
    'Dé Luain',
    'Dé Máirt',
    'Dé Céadaoin',
    'Déardaoin',
    'Dé hAoine',
    'Dé Sathairn'
  ],
  dayNamesShort: ['Dom', 'Lua', 'Mái', 'Céa', 'Déa', 'hAo', 'Sat'],
  monthNames: [
    'Eanáir',
    'Feabhra',
    'Márta',
    'Aibreán',
    'Bealtaine',
    'Meitheamh',
    'Iúil',
    'Lúnasa',
    'Meán Fómhair',
    'Deireadh Fómhair',
    'Samhain',
    'Nollaig'
  ],
  monthNamesShort: [
    'Ean',
    'Fea',
    'Már',
    'Aib',
    'Bea',
    'Mei',
    'Iúi',
    'Lún',
    'MFó',
    'DFó',
    'Sam',
    'Nol'
  ],
  relative: {
    now: 'anois',
    past: '{value} {unit} ó shin',
    future: 'i {value} {unit}',
    units: {
      singular: {
        second: 'soicind',
        minute: 'nóiméad',
        hour: 'uair',
        day: 'lá',
        week: 'seachtain',
        month: 'mí',
        year: 'bliain'
      },
      plural: {
        second: 'soicind',
        minute: 'nóiméad',
        hour: 'uair',
        day: 'lá',
        week: 'seachtain',
        month: 'mí',
        year: 'bliain'
      }
    }
  },
  code: 'ga'
}
