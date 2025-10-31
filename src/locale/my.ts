import type * as Types from '@app/Types.ts'

/**
 * Burmese (my) locale data.
 * @description Burmese locale for Daytime library.
 */
export const my: Types.LocaleData = {
  dayNames: ['တနင်္ဂနွေ', 'တနင်္လာ', 'အင်္ဂါ', 'ဗုဒ္ဓဟူး', 'ကြာသပတေး', 'သောကြာ', 'စနေ'],
  dayNamesShort: ['နွေ', 'လာ', 'ဂါ', 'ဟူး', 'ကြာ', 'သော', 'နေ'],
  monthNames: [
    'ဇန်နဝါရီ',
    'ဖေဖော်ဝါရီ',
    'မတ်',
    'ဧပြီ',
    'မေ',
    'ဇွန်',
    'ဇူလိုင်',
    'သြဂုတ်',
    'စက်တင်ဘာ',
    'အောက်တိုဘာ',
    'နိုဝင်ဘာ',
    'ဒီဇင်ဘာ'
  ],
  monthNamesShort: ['ဇန်', 'ဖေ', 'မတ်', 'ဧပြ', 'မေ', 'ဇွန်', 'ဇူလိုင်', 'သြ', 'စက်', 'အောက်', 'နို', 'ဒီ'],
  relative: {
    now: 'ယခု',
    past: '{value} {unit} က',
    future: '{value} {unit} အတွင်း',
    units: {
      singular: {
        second: 'စက္ကန့်',
        minute: 'မိနစ်',
        hour: 'နာရီ',
        day: 'ရက်',
        week: 'ပတ်',
        month: 'လ',
        year: 'နှစ်'
      },
      plural: {
        second: 'စက္ကန့်',
        minute: 'မိနစ်',
        hour: 'နာရီ',
        day: 'ရက်',
        week: 'ပတ်',
        month: 'လ',
        year: 'နှစ်'
      }
    }
  },
  code: 'my'
}
