import type * as Types from '@app/Types.ts'

/**
 * Lithuanian (lt) locale data.
 * @description Lithuanian locale for Daytime library.
 */
export const lt: Types.LocaleData = {
  dayNames: [
    'Sekmadienis',
    'Pirmadienis',
    'Antradienis',
    'Trečiadienis',
    'Ketvirtadienis',
    'Penktadienis',
    'Šeštadienis'
  ],
  dayNamesShort: ['Sek', 'Pir', 'Ant', 'Tre', 'Ket', 'Pen', 'Šeš'],
  monthNames: [
    'Sausis',
    'Vasaris',
    'Kovas',
    'Balandis',
    'Gegužė',
    'Birželis',
    'Liepa',
    'Rugpjūtis',
    'Rugsėjis',
    'Spalis',
    'Lapkritis',
    'Gruodis'
  ],
  monthNamesShort: [
    'Sau',
    'Vas',
    'Kov',
    'Bal',
    'Geg',
    'Bir',
    'Lie',
    'Rugp',
    'Rugs',
    'Spa',
    'Lap',
    'Gru'
  ],
  relative: {
    now: 'dabar',
    past: 'prieš {value} {unit}',
    future: 'po {value} {unit}',
    units: {
      singular: {
        second: 'sekundę',
        minute: 'minutę',
        hour: 'valandą',
        day: 'dieną',
        week: 'savaitę',
        month: 'mėnesį',
        year: 'metus'
      },
      plural: {
        second: 'sekundžių',
        minute: 'minučių',
        hour: 'valandų',
        day: 'dienų',
        week: 'savaičių',
        month: 'mėnesių',
        year: 'metų'
      }
    }
  },
  code: 'lt'
}
