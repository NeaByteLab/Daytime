import type * as Types from '@app/Types.ts'

/**
 * Maori (mi) locale data.
 * @description Maori locale for Daytime library.
 */
export const mi: Types.LocaleData = {
  dayNames: ['Rātapu', 'Rāhina', 'Rātū', 'Rāapa', 'Rāpare', 'Rāmere', 'Rāhoroi'],
  dayNamesShort: ['Rāt', 'Rāhi', 'Rātū', 'Rāa', 'Rāp', 'Rām', 'Rāho'],
  monthNames: [
    'Kohitātea',
    'Huitanguru',
    'Poutūterangi',
    'Paengawhāwhā',
    'Haratua',
    'Pipiri',
    'Hōngongoi',
    'Here-turi-kōkā',
    'Mahuru',
    'Whiringa-ā-nuku',
    'Whiringa-ā-rangi',
    'Hakihea'
  ],
  monthNamesShort: [
    'Kohi',
    'Hui',
    'Pou',
    'Paen',
    'Hara',
    'Pipi',
    'Hōngo',
    'Here',
    'Mahu',
    'Whi-n',
    'Whi-r',
    'Haki'
  ],
  relative: {
    now: 'āianei',
    past: '{value} {unit} i mua',
    future: 'i {value} {unit}',
    units: {
      singular: {
        second: 'hēkona',
        minute: 'meneti',
        hour: 'haora',
        day: 'rā',
        week: 'wiki',
        month: 'marama',
        year: 'tau'
      },
      plural: {
        second: 'hēkona',
        minute: 'meneti',
        hour: 'haora',
        day: 'rā',
        week: 'wiki',
        month: 'marama',
        year: 'tau'
      }
    }
  },
  code: 'mi'
}
