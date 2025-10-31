import type * as Types from '@app/Types.ts'

/**
 * Arabic (ar) locale data.
 * @description Arabic locale for Daytime library.
 */
export const ar: Types.LocaleData = {
  dayNames: [
    'الأحد',
    'الإثنين',
    'الثلاثاء',
    'الأربعاء',
    'الخميس',
    'الجمعة',
    'السبت'
  ],
  dayNamesShort: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
  monthNames: [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
  ],
  monthNamesShort: [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
  ],
  relative: {
    now: 'الآن',
    past: 'منذ {value} {unit}',
    future: 'خلال {value} {unit}',
    units: {
      singular: {
        second: 'ثانية',
        minute: 'دقيقة',
        hour: 'ساعة',
        day: 'يوم',
        week: 'أسبوع',
        month: 'شهر',
        year: 'سنة'
      },
      plural: {
        second: 'ثوانٍ',
        minute: 'دقائق',
        hour: 'ساعات',
        day: 'أيام',
        week: 'أسابيع',
        month: 'أشهر',
        year: 'سنوات'
      }
    }
  },
  code: 'ar'
}
