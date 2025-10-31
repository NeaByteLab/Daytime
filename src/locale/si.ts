import type * as Types from '@app/Types.ts'

/**
 * Sinhala (si) locale data.
 * @description Sinhala locale for Daytime library.
 */
export const si: Types.LocaleData = {
  dayNames: ['ඉරිදා', 'සඳුදා', 'අඟහරුවාදා', 'බදාදා', 'බ්‍රහස්පතින්දා', 'සිකුරාදා', 'සෙනසුරාදා'],
  dayNamesShort: ['ඉරි', 'සඳු', 'අඟ', 'බදා', 'බ්‍රහ', 'සිකු', 'සෙන'],
  monthNames: [
    'ජනවාරි',
    'පෙබරවාරි',
    'මාර්තු',
    'අප්‍රේල්',
    'මැයි',
    'ජූනි',
    'ජූලි',
    'අගෝස්තු',
    'සැප්තැම්බර්',
    'ඔක්තෝබර්',
    'නොවැම්බර්',
    'දෙසැම්බර්'
  ],
  monthNamesShort: [
    'ජන',
    'පෙබ',
    'මාර්',
    'අප්‍රේ',
    'මැයි',
    'ජූනි',
    'ජූලි',
    'අගෝ',
    'සැප්',
    'ඔක්තෝ',
    'නොවැ',
    'දෙසැ'
  ],
  relative: {
    now: 'දැන්',
    past: '{value} {unit} කට පෙර',
    future: '{value} {unit} කින්',
    units: {
      singular: {
        second: 'තත්පරයක',
        minute: 'මිනිත්තුවක',
        hour: 'පැයක',
        day: 'දිනක',
        week: 'සතියක',
        month: 'මාසයක',
        year: 'වසරක'
      },
      plural: {
        second: 'තත්පර',
        minute: 'මිනිත්තු',
        hour: 'පැය',
        day: 'දින',
        week: 'සති',
        month: 'මාස',
        year: 'වසර'
      }
    }
  },
  code: 'si'
}
