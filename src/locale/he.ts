import type * as Types from '@app/Types.ts'

/**
 * Hebrew (he) locale data.
 * @description Hebrew locale for Daytime library.
 */
export const he: Types.LocaleData = {
  dayNames: [
    'יום ראשון',
    'יום שני',
    'יום שלישי',
    'יום רביעי',
    'יום חמישי',
    'יום שישי',
    'שבת'
  ],
  dayNamesShort: ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'],
  monthNames: [
    'ינואר',
    'פברואר',
    'מרץ',
    'אפריל',
    'מאי',
    'יוני',
    'יולי',
    'אוגוסט',
    'ספטמבר',
    'אוקטובר',
    'נובמבר',
    'דצמבר'
  ],
  monthNamesShort: [
    'ינו׳',
    'פבר׳',
    'מרץ',
    'אפר׳',
    'מאי',
    'יוני',
    'יולי',
    'אוג׳',
    'ספט׳',
    'אוק׳',
    'נוב׳',
    'דצמ׳'
  ],
  relative: {
    now: 'עכשיו',
    past: 'לפני {value} {unit}',
    future: 'בעוד {value} {unit}',
    units: {
      singular: {
        second: 'שנייה',
        minute: 'דקה',
        hour: 'שעה',
        day: 'יום',
        week: 'שבוע',
        month: 'חודש',
        year: 'שנה'
      },
      plural: {
        second: 'שניות',
        minute: 'דקות',
        hour: 'שעות',
        day: 'ימים',
        week: 'שבועות',
        month: 'חודשים',
        year: 'שנים'
      }
    }
  },
  code: 'he'
}
