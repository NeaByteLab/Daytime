import type * as Types from '@app/Types.ts'

/**
 * Persian/Farsi (fa) locale data.
 * @description Persian/Farsi locale for Daytime library.
 */
export const fa: Types.LocaleData = {
  dayNames: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'],
  dayNamesShort: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
  monthNames: [
    'ژانویه',
    'فوریه',
    'مارس',
    'آوریل',
    'مه',
    'ژوئن',
    'ژوئیه',
    'اوت',
    'سپتامبر',
    'اکتبر',
    'نوامبر',
    'دسامبر'
  ],
  monthNamesShort: [
    'ژان',
    'فور',
    'مار',
    'آور',
    'مه',
    'ژوئن',
    'ژوئ',
    'اوت',
    'سپت',
    'اکت',
    'نوا',
    'دسا'
  ],
  relative: {
    now: 'همین حالا',
    past: '{value} {unit} پیش',
    future: 'در {value} {unit}',
    units: {
      singular: {
        second: 'ثانیه',
        minute: 'دقیقه',
        hour: 'ساعت',
        day: 'روز',
        week: 'هفته',
        month: 'ماه',
        year: 'سال'
      },
      plural: {
        second: 'ثانیه',
        minute: 'دقیقه',
        hour: 'ساعت',
        day: 'روز',
        week: 'هفته',
        month: 'ماه',
        year: 'سال'
      }
    }
  },
  code: 'fa'
}
