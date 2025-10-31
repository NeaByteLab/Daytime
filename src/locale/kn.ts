import type * as Types from '@app/Types.ts'

/**
 * Kannada (kn) locale data.
 * @description Kannada locale for Daytime library.
 */
export const kn: Types.LocaleData = {
  dayNames: ['ಭಾನುವಾರ', 'ಸೋಮವಾರ', 'ಮಂಗಳವಾರ', 'ಬುಧವಾರ', 'ಗುರುವಾರ', 'ಶುಕ್ರವಾರ', 'ಶನಿವಾರ'],
  dayNamesShort: ['ಭಾನು', 'ಸೋಮ', 'ಮಂಗಳ', 'ಬುಧ', 'ಗುರು', 'ಶುಕ್ರ', 'ಶನಿ'],
  monthNames: [
    'ಜನವರಿ',
    'ಫೆಬ್ರವರಿ',
    'ಮಾರ್ಚ್',
    'ಏಪ್ರಿಲ್',
    'ಮೇ',
    'ಜೂನ್',
    'ಜುಲೈ',
    'ಆಗಸ್ಟ್',
    'ಸೆಪ್ಟೆಂಬರ್',
    'ಅಕ್ಟೋಬರ್',
    'ನವೆಂಬರ್',
    'ಡಿಸೆಂಬರ್'
  ],
  monthNamesShort: ['ಜನ', 'ಫೆಬ್', 'ಮಾರ್ಚ್', 'ಏಪ್ರಿ', 'ಮೇ', 'ಜೂನ್', 'ಜುಲೈ', 'ಆಗ', 'ಸೆಪ್ಟೆ', 'ಅಕ್ಟೋ', 'ನವೆ', 'ಡಿಸೆ'],
  relative: {
    now: 'ಈಗ',
    past: '{value} {unit} ಹಿಂದೆ',
    future: '{value} {unit} ನಂತರ',
    units: {
      singular: {
        second: 'ಸೆಕೆಂಡ್',
        minute: 'ನಿಮಿಷ',
        hour: 'ಗಂಟೆ',
        day: 'ದಿನ',
        week: 'ವಾರ',
        month: 'ತಿಂಗಳು',
        year: 'ವರ್ಷ'
      },
      plural: {
        second: 'ಸೆಕೆಂಡ್',
        minute: 'ನಿಮಿಷ',
        hour: 'ಗಂಟೆ',
        day: 'ದಿನ',
        week: 'ವಾರ',
        month: 'ತಿಂಗಳು',
        year: 'ವರ್ಷ'
      }
    }
  },
  code: 'kn'
}
