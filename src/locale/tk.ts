import type * as Types from '@app/Types.ts'

/**
 * Turkmen (tk) locale data.
 * @description Turkmen locale for Daytime library.
 */
export const tk: Types.LocaleData = {
  dayNames: ['Ýekşenbe', 'Duşenbe', 'Sişenbe', 'Çarşenbe', 'Penşenbe', 'Anna', 'Şenbe'],
  dayNamesShort: ['Ýek', 'Duş', 'Siş', 'Çar', 'Pen', 'Ann', 'Şen'],
  monthNames: [
    'Ýanwar',
    'Fewral',
    'Mart',
    'Aprel',
    'Maý',
    'İýun',
    'İýul',
    'Awgust',
    'Sentýabr',
    'Oktýabr',
    'Noýabr',
    'Dekabr'
  ],
  monthNamesShort: [
    'Ýan',
    'Few',
    'Mar',
    'Apr',
    'Maý',
    'İýu',
    'İýu',
    'Awg',
    'Sen',
    'Okt',
    'Noý',
    'Dek'
  ],
  relative: {
    now: 'häzir',
    past: '{value} {unit} öň',
    future: '{value} {unit} soň',
    units: {
      singular: {
        second: 'sekunt',
        minute: 'minut',
        hour: 'sagat',
        day: 'gün',
        week: 'hepde',
        month: 'aý',
        year: 'ýyl'
      },
      plural: {
        second: 'sekunt',
        minute: 'minut',
        hour: 'sagat',
        day: 'gün',
        week: 'hepde',
        month: 'aý',
        year: 'ýyl'
      }
    }
  },
  code: 'tk'
}
