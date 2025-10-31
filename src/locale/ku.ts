import type * as Types from '@app/Types.ts'

/**
 * Kurdish (ku) locale data.
 * @description Kurdish locale for Daytime library.
 */
export const ku: Types.LocaleData = {
  dayNames: ['Yekşem', 'Duşem', 'Sêşem', 'Çarşem', 'Pêncşem', 'În', 'Şemî'],
  dayNamesShort: ['Yek', 'Duş', 'Sêş', 'Çar', 'Pên', 'În', 'Şem'],
  monthNames: [
    'Rêbendan',
    'Reşemeh',
    'Adar',
    'Avrêl',
    'Gulan',
    'Pûşber',
    'Tîrmeh',
    'Gilavêj',
    'Rezber',
    'Kewçêr',
    'Sarmawaz',
    'Berfanbar'
  ],
  monthNamesShort: [
    'Rêb',
    'Reş',
    'Ada',
    'Avr',
    'Gul',
    'Pûş',
    'Tîr',
    'Gil',
    'Rez',
    'Kew',
    'Sar',
    'Ber'
  ],
  relative: {
    now: 'niha',
    past: '{value} {unit} berê',
    future: 'di {value} {unit} de',
    units: {
      singular: {
        second: 'çirke',
        minute: 'deqe',
        hour: 'saet',
        day: 'roj',
        week: 'hefte',
        month: 'meh',
        year: 'sal'
      },
      plural: {
        second: 'çirke',
        minute: 'deqe',
        hour: 'saet',
        day: 'roj',
        week: 'hefte',
        month: 'meh',
        year: 'sal'
      }
    }
  },
  code: 'ku'
}
