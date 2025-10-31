import type * as Types from '@app/Types.ts'

/**
 * Gujarati (gu) locale data.
 * @description Gujarati locale for Daytime library.
 */
export const gu: Types.LocaleData = {
  dayNames: ['રવિવાર', 'સોમવાર', 'મંગળવાર', 'બુધવાર', 'ગુરુવાર', 'શુક્રવાર', 'શનિવાર'],
  dayNamesShort: ['રવિ', 'સોમ', 'મંગળ', 'બુધ', 'ગુરુ', 'શુક્ર', 'શનિ'],
  monthNames: [
    'જાન્યુઆરી',
    'ફેબ્રુઆરી',
    'માર્ચ',
    'એપ્રિલ',
    'મે',
    'જૂન',
    'જુલાઈ',
    'ઑગસ્ટ',
    'સપ્ટેમ્બર',
    'ઑક્ટોબર',
    'નવેમ્બર',
    'ડિસેમ્બર'
  ],
  monthNamesShort: [
    'જાન્યુ',
    'ફેબ્રુ',
    'માર્ચ',
    'એપ્રિલ',
    'મે',
    'જૂન',
    'જુલાઈ',
    'ઑગ',
    'સપ્ટે',
    'ઑક્ટો',
    'નવે',
    'ડિસે'
  ],
  relative: {
    now: 'હમણાં',
    past: '{value} {unit} પહેલાં',
    future: '{value} {unit} માં',
    units: {
      singular: {
        second: 'સેકંડ',
        minute: 'મિનિટ',
        hour: 'કલાક',
        day: 'દિવસ',
        week: 'અઠવાડિયું',
        month: 'મહિનો',
        year: 'વર્ષ'
      },
      plural: {
        second: 'સેકંડ',
        minute: 'મિનિટ',
        hour: 'કલાક',
        day: 'દિવસ',
        week: 'અઠવાડિયા',
        month: 'મહિના',
        year: 'વર્ષ'
      }
    }
  },
  code: 'gu'
}
