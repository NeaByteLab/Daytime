import type * as Types from '@app/Types.ts'

/**
 * Central Atlas Tamazight (tzm) locale data.
 * @description Central Atlas Tamazight locale for Daytime library.
 */
export const tzm: Types.LocaleData = {
  dayNames: ['ⴰⵙⴰⵎⴰⵙ', 'ⴰⵢⵏⴰⵙ', 'ⴰⵙⵉⵏⴰⵙ', 'ⴰⴽⵕⴰⵙ', 'ⴰⴽⵡⴰⵙ', 'ⵙⵉⵎⵡⴰⵙ', 'ⴰⵙⵉⴹⵢⴰⵙ'],
  dayNamesShort: ['ⴰⵙⴰ', 'ⴰⵢⵏ', 'ⴰⵙⵉ', 'ⴰⴽⵕ', 'ⴰⴽⵡ', 'ⵙⵉⵎ', 'ⴰⵙⵉⴹ'],
  monthNames: [
    'ⵉⵏⵏⴰⵢⵔ',
    'ⴱⵕⴰⵢⵕ',
    'ⵎⴰⵕⵚ',
    'ⵉⴱⵔⵉⵔ',
    'ⵎⴰⵢⵢⵓ',
    'ⵢⵓⵏⵢⵓ',
    'ⵢⵓⵍⵢⵓⵣ',
    'ⵖⵓⵛⵜ',
    'ⵛⵓⵏⵛⵉⵕ',
    'ⴽⵜⵓⴱⵕ',
    'ⵏⵓⵡⴰⵏⴱⵉⵕ',
    'ⴷⵓⵊⴰⵏⴱⵉⵕ'
  ],
  monthNamesShort: [
    'ⵉⵏⵏ',
    'ⴱⵕⴰ',
    'ⵎⴰⵕ',
    'ⵉⴱⵔ',
    'ⵎⴰⵢ',
    'ⵢⵓⵏ',
    'ⵢⵓⵍ',
    'ⵖⵓⵛ',
    'ⵛⵓⵏ',
    'ⴽⵜⵓ',
    'ⵏⵓⵡ',
    'ⴷⵓⵊ'
  ],
  relative: {
    now: 'ⵖⵓⵔⴰ',
    past: '{value} {unit} ⵉⵣⵏⵉⵏⵓ',
    future: 'ⴷⵉⵏ {value} {unit}',
    units: {
      singular: {
        second: 'ⵜⴰⵙⴰⵏⵉⵏⵉⵡⵉⵏ',
        minute: 'ⵜⵉⵎⵉⵏⵉⵏⵉⵏ',
        hour: 'ⵙⴰⵄⴰ',
        day: 'ⴰⵙⵙ',
        week: 'ⵉⵎⴰⵍⴰⵙⵙ',
        month: 'ⴰⵢⵢⵓⵔ',
        year: 'ⵙⴳⴳⵯⴰⵙ'
      },
      plural: {
        second: 'ⵜⴰⵙⴰⵏⵉⵏⵉⵡⵉⵏ',
        minute: 'ⵜⵉⵎⵉⵏⵉⵏⵉⵏ',
        hour: 'ⵙⴰⵄⴰⵡⵉⵏ',
        day: 'ⵓⵙⵙⴰⵏ',
        week: 'ⵉⵎⴰⵍⴰⵙⵙⴰⵏ',
        month: 'ⴰⵢⵢⵓⵔⴰⵏ',
        year: 'ⵙⴳⴳⵯⴰⵙⵏ'
      }
    }
  },
  code: 'tzm'
}
