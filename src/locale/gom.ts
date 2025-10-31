import type * as Types from '@app/Types.ts'

/**
 * Konkani (gom) locale data.
 * @description Konkani locale for Daytime library.
 */
export const gom: Types.LocaleData = {
  dayNames: ['आयतार', 'सोमार', 'मंगळार', 'बुधवार', 'बिरेस्तार', 'सुक्रार', 'शेनवार'],
  dayNamesShort: ['आय', 'सोम', 'मंगळ', 'बुध', 'बिरे', 'सुक्र', 'शेन'],
  monthNames: [
    'जानेवारी',
    'फेब्रुवारी',
    'मार्च',
    'एप्रील',
    'मे',
    'जून',
    'जुलय',
    'ऑगस्ट',
    'सेप्टेंबर',
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
    'जुल',
    'ऑग',
    'सेप्टें',
    'ऑक्टो',
    'नोव्हें',
    'डिसें'
  ],
  relative: {
    now: 'आतां',
    past: '{value} {unit} आदीं',
    future: '{value} {unit} उपरांत',
    units: {
      singular: {
        second: 'सेकंद',
        minute: 'मिनिट',
        hour: 'तास',
        day: 'दीस',
        week: 'सप्तक',
        month: 'म्हयनो',
        year: 'वर्स'
      },
      plural: {
        second: 'सेकंद',
        minute: 'मिनिटां',
        hour: 'तास',
        day: 'दीस',
        week: 'सप्तकां',
        month: 'म्हयने',
        year: 'वर्सां'
      }
    }
  },
  code: 'gom'
}
