import type * as Types from '@app/Types.ts'

/**
 * Hindi (hi) locale data.
 * @description Hindi locale for Daytime library.
 */
export const hi: Types.LocaleData = {
  dayNames: [
    'रविवार',
    'सोमवार',
    'मंगलवार',
    'बुधवार',
    'गुरुवार',
    'शुक्रवार',
    'शनिवार'
  ],
  dayNamesShort: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
  monthNames: [
    'जनवरी',
    'फरवरी',
    'मार्च',
    'अप्रैल',
    'मई',
    'जून',
    'जुलाई',
    'अगस्त',
    'सितंबर',
    'अक्टूबर',
    'नवंबर',
    'दिसंबर'
  ],
  monthNamesShort: [
    'जन',
    'फर',
    'मार्च',
    'अप्रै',
    'मई',
    'जून',
    'जुल',
    'अग',
    'सित',
    'अक्टू',
    'नव',
    'दिस'
  ],
  relative: {
    now: 'अभी',
    past: '{value} {unit} पहले',
    future: '{value} {unit} बाद',
    units: {
      singular: {
        second: 'सेकंड',
        minute: 'मिनट',
        hour: 'घंटा',
        day: 'दिन',
        week: 'सप्ताह',
        month: 'महीना',
        year: 'वर्ष'
      },
      plural: {
        second: 'सेकंड',
        minute: 'मिनट',
        hour: 'घंटे',
        day: 'दिन',
        week: 'सप्ताह',
        month: 'महीने',
        year: 'वर्ष'
      }
    }
  },
  code: 'hi'
}
