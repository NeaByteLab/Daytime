import type * as Types from '@app/Types.ts'

/**
 * Urdu (ur) locale data.
 * @description Urdu locale for Daytime library.
 */
export const ur: Types.LocaleData = {
  dayNames: ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'],
  dayNamesShort: ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'],
  monthNames: [
    'جنوری',
    'فروری',
    'مارچ',
    'اپریل',
    'مئی',
    'جون',
    'جولائی',
    'اگست',
    'ستمبر',
    'اکتوبر',
    'نومبر',
    'دسمبر'
  ],
  monthNamesShort: [
    'جنوری',
    'فروری',
    'مارچ',
    'اپریل',
    'مئی',
    'جون',
    'جولائی',
    'اگست',
    'ستمبر',
    'اکتوبر',
    'نومبر',
    'دسمبر'
  ],
  relative: {
    now: 'ابھی',
    past: '{value} {unit} پہلے',
    future: '{value} {unit} بعد',
    units: {
      singular: {
        second: 'سیکنڈ',
        minute: 'منٹ',
        hour: 'گھنٹہ',
        day: 'دن',
        week: 'ہفتہ',
        month: 'مہینہ',
        year: 'سال'
      },
      plural: {
        second: 'سیکنڈ',
        minute: 'منٹ',
        hour: 'گھنٹے',
        day: 'دن',
        week: 'ہفتے',
        month: 'مہینے',
        year: 'سال'
      }
    }
  },
  code: 'ur'
}
