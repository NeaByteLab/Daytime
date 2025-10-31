import type * as Types from '@app/Types.ts'

/**
 * Nepali (ne) locale data.
 * @description Nepali locale for Daytime library.
 */
export const ne: Types.LocaleData = {
  dayNames: ['आइतबार', 'सोमबार', 'मङ्गलबार', 'बुधबार', 'बिहिबार', 'शुक्रबार', 'शनिबार'],
  dayNamesShort: ['आइत', 'सोम', 'मङ्गल', 'बुध', 'बिहि', 'शुक्र', 'शनि'],
  monthNames: [
    'जनवरी',
    'फेब्रुअरी',
    'मार्च',
    'अप्रिल',
    'मे',
    'जुन',
    'जुलाई',
    'अगस्ट',
    'सेप्टेम्बर',
    'अक्टोबर',
    'नोभेम्बर',
    'डिसेम्बर'
  ],
  monthNamesShort: [
    'जन',
    'फेब्',
    'मार्च',
    'अप्रि',
    'मे',
    'जुन',
    'जुला',
    'अग',
    'सेप्टे',
    'अक्टो',
    'नोभे',
    'डिसे'
  ],
  relative: {
    now: 'अहिले',
    past: '{value} {unit} अघि',
    future: '{value} {unit} पछि',
    units: {
      singular: {
        second: 'सेकेन्ड',
        minute: 'मिनेट',
        hour: 'घण्टा',
        day: 'दिन',
        week: 'हप्ता',
        month: 'महिना',
        year: 'वर्ष'
      },
      plural: {
        second: 'सेकेन्ड',
        minute: 'मिनेट',
        hour: 'घण्टा',
        day: 'दिन',
        week: 'हप्ता',
        month: 'महिना',
        year: 'वर्ष'
      }
    }
  },
  code: 'ne'
}
