import type * as Types from '@app/Types.ts'

/**
 * Marathi (mr) locale data.
 * @description Marathi locale for Daytime library.
 */
export const mr: Types.LocaleData = {
  dayNames: ['रविवार', 'सोमवार', 'मंगळवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
  dayNamesShort: ['रवि', 'सोम', 'मंगळ', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
  monthNames: [
    'जानेवारी',
    'फेब्रुवारी',
    'मार्च',
    'एप्रिल',
    'मे',
    'जून',
    'जुलै',
    'ऑगस्ट',
    'सप्टेंबर',
    'ऑक्टोबर',
    'नोव्हेंबर',
    'डिसेंबर'
  ],
  monthNamesShort: [
    'जाने',
    'फेब्रु',
    'मार्च',
    'एप्रि',
    'मे',
    'जून',
    'जुलै',
    'ऑग',
    'सप्टें',
    'ऑक्टो',
    'नोव्हें',
    'डिसें'
  ],
  relative: {
    now: 'आत्ता',
    past: '{value} {unit} आधी',
    future: '{value} {unit} नंतर',
    units: {
      singular: {
        second: 'सेकंद',
        minute: 'मिनिट',
        hour: 'तास',
        day: 'दिवस',
        week: 'आठवडा',
        month: 'महिना',
        year: 'वर्ष'
      },
      plural: {
        second: 'सेकंद',
        minute: 'मिनिटे',
        hour: 'तास',
        day: 'दिवस',
        week: 'आठवडे',
        month: 'महिने',
        year: 'वर्षे'
      }
    }
  },
  code: 'mr'
}
