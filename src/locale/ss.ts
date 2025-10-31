import type * as Types from '@app/Types.ts'

/**
 * Swati (ss) locale data.
 * @description Swati locale for Daytime library.
 */
export const ss: Types.LocaleData = {
  dayNames: [
    'Lisontfo',
    'uMsombuluko',
    'Lesibili',
    'Lesitsatfu',
    'Lesine',
    'Lesihlanu',
    'uMgcibelo'
  ],
  dayNamesShort: ['Lis', 'Mso', 'Bil', 'Tsa', 'Sin', 'Hla', 'Mgc'],
  monthNames: [
    'Bhimbidvwane',
    'Indlovana',
    "Indlov'lenkhulu",
    'Mabasa',
    'Inkhwekhweti',
    'Inhlaba',
    'Kholwane',
    'Ingci',
    'Inyoni',
    'Imphala',
    'Lweti',
    'Ingongoni'
  ],
  monthNamesShort: [
    'Bhi',
    'Ina',
    'Inl',
    'Mab',
    'Ink',
    'Inh',
    'Kho',
    'Ing',
    'Iny',
    'Imp',
    'Lwe',
    'Ing'
  ],
  relative: {
    now: 'nyalo',
    past: '{value} {unit} lelive',
    future: 'nge {value} {unit}',
    units: {
      singular: {
        second: 'sekondi',
        minute: 'umzuzu',
        hour: 'lihora',
        day: 'lilanga',
        week: 'liwiki',
        month: 'inyanga',
        year: 'umnyaka'
      },
      plural: {
        second: 'sekondi',
        minute: 'imizuzu',
        hour: 'emahora',
        day: 'emalanga',
        week: 'emaviki',
        month: 'tinyanga',
        year: 'iminyaka'
      }
    }
  },
  code: 'ss'
}
