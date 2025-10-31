import type * as Types from '@app/Types.ts'

/**
 * Bengali (bn) locale data.
 * @description Bengali locale for Daytime library.
 */
export const bn: Types.LocaleData = {
  dayNames: [
    'রবিবার',
    'সোমবার',
    'মঙ্গলবার',
    'বুধবার',
    'বৃহস্পতিবার',
    'শুক্রবার',
    'শনিবার'
  ],
  dayNamesShort: ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহ', 'শুক্র', 'শনি'],
  monthNames: [
    'জানুয়ারী',
    'ফেব্রুয়ারী',
    'মার্চ',
    'এপ্রিল',
    'মে',
    'জুন',
    'জুলাই',
    'আগস্ট',
    'সেপ্টেম্বর',
    'অক্টোবর',
    'নভেম্বর',
    'ডিসেম্বর'
  ],
  monthNamesShort: [
    'জানু',
    'ফেব',
    'মার্চ',
    'এপ্রি',
    'মে',
    'জুন',
    'জুল',
    'আগ',
    'সেপ্ট',
    'অক্টো',
    'নভে',
    'ডিসে'
  ],
  relative: {
    now: 'এখন',
    past: '{value} {unit} আগে',
    future: '{value} {unit} পরে',
    units: {
      singular: {
        second: 'সেকেন্ড',
        minute: 'মিনিট',
        hour: 'ঘণ্টা',
        day: 'দিন',
        week: 'সপ্তাহ',
        month: 'মাস',
        year: 'বছর'
      },
      plural: {
        second: 'সেকেন্ড',
        minute: 'মিনিট',
        hour: 'ঘণ্টা',
        day: 'দিন',
        week: 'সপ্তাহ',
        month: 'মাস',
        year: 'বছর'
      }
    }
  },
  code: 'bn'
}
