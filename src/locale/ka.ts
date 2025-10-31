import type * as Types from '@app/Types.ts'

/**
 * Georgian (ka) locale data.
 * @description Georgian locale for Daytime library.
 */
export const ka: Types.LocaleData = {
  dayNames: ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი'],
  dayNamesShort: ['კვ', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'],
  monthNames: [
    'იანვარი',
    'თებერვალი',
    'მარტი',
    'აპრილი',
    'მაისი',
    'ივნისი',
    'ივლისი',
    'აგვისტო',
    'სექტემბერი',
    'ოქტომბერი',
    'ნოემბერი',
    'დეკემბერი'
  ],
  monthNamesShort: [
    'იან',
    'თებ',
    'მარ',
    'აპრ',
    'მაი',
    'ივნ',
    'ივლ',
    'აგვ',
    'სექ',
    'ოქტ',
    'ნოე',
    'დეკ'
  ],
  relative: {
    now: 'ახლა',
    past: '{value} {unit} წინ',
    future: '{value} {unit} შემდეგ',
    units: {
      singular: {
        second: 'წამი',
        minute: 'წუთი',
        hour: 'საათი',
        day: 'დღე',
        week: 'კვირა',
        month: 'თვე',
        year: 'წელი'
      },
      plural: {
        second: 'წამი',
        minute: 'წუთი',
        hour: 'საათი',
        day: 'დღე',
        week: 'კვირა',
        month: 'თვე',
        year: 'წელი'
      }
    }
  },
  code: 'ka'
}
