import type * as Types from '@app/Types.ts'

/**
 * Sindhi (sd) locale data.
 * @description Sindhi locale for Daytime library.
 */
export const sd: Types.LocaleData = {
  dayNames: ['آچر', 'سومر', 'اڱارو', 'اربع', 'خميس', 'جمعو', 'ڇنڇر'],
  dayNamesShort: ['آچ', 'سوم', 'اڱ', 'ارب', 'خم', 'جم', 'ڇن'],
  monthNames: [
    'جنوري',
    'فيبروري',
    'مارچ',
    'اپريل',
    'مئي',
    'جون',
    'جولاءِ',
    'آگسٽ',
    'سيپٽمبر',
    'آڪٽوبر',
    'نومبر',
    'ڊسمبر'
  ],
  monthNamesShort: [
    'جنو',
    'فيب',
    'مار',
    'اپر',
    'مئي',
    'جون',
    'جول',
    'آگ',
    'سيپ',
    'آڪ',
    'نوم',
    'ڊس'
  ],
  relative: {
    now: 'هاڻي',
    past: '{value} {unit} اڳ',
    future: '{value} {unit} پوءِ',
    units: {
      singular: {
        second: 'سيڪنڊ',
        minute: 'منٽ',
        hour: 'ڪلاڪ',
        day: 'ڏينهن',
        week: 'هفتو',
        month: 'مهينو',
        year: 'سال'
      },
      plural: {
        second: 'سيڪنڊ',
        minute: 'منٽ',
        hour: 'ڪلاڪ',
        day: 'ڏينهن',
        week: 'هفتا',
        month: 'مهينا',
        year: 'سال'
      }
    }
  },
  code: 'sd'
}
