import type * as Types from '@app/Types.ts'

/**
 * Punjabi (pa) locale data.
 * @description Punjabi locale for Daytime library.
 */
export const pa: Types.LocaleData = {
  dayNames: ['ਐਤਵਾਰ', 'ਸੋਮਵਾਰ', 'ਮੰਗਲਵਾਰ', 'ਬੁੱਧਵਾਰ', 'ਵੀਰਵਾਰ', 'ਸ਼ੁੱਕਰਵਾਰ', 'ਸ਼ਨੀਵਾਰ'],
  dayNamesShort: ['ਐਤ', 'ਸੋਮ', 'ਮੰਗਲ', 'ਬੁੱਧ', 'ਵੀਰ', 'ਸ਼ੁੱਕਰ', 'ਸ਼ਨੀ'],
  monthNames: [
    'ਜਨਵਰੀ',
    'ਫ਼ਰਵਰੀ',
    'ਮਾਰਚ',
    'ਅਪ੍ਰੈਲ',
    'ਮਈ',
    'ਜੂਨ',
    'ਜੁਲਾਈ',
    'ਅਗਸਤ',
    'ਸਤੰਬਰ',
    'ਅਕਤੂਬਰ',
    'ਨਵੰਬਰ',
    'ਦਸੰਬਰ'
  ],
  monthNamesShort: ['ਜਨ', 'ਫ਼ਰ', 'ਮਾਰ', 'ਅਪ੍ਰੈ', 'ਮਈ', 'ਜੂਨ', 'ਜੁਲਾ', 'ਅਗ', 'ਸਤੰ', 'ਅਕਤੂ', 'ਨਵੰ', 'ਦਸੰ'],
  relative: {
    now: 'ਹੁਣ',
    past: '{value} {unit} ਪਹਿਲਾਂ',
    future: '{value} {unit} ਬਾਅਦ',
    units: {
      singular: {
        second: 'ਸੇਕੰਡ',
        minute: 'ਮਿੰਟ',
        hour: 'ਘੰਟਾ',
        day: 'ਦਿਨ',
        week: 'ਹਫ਼ਤਾ',
        month: 'ਮਹੀਨਾ',
        year: 'ਸਾਲ'
      },
      plural: {
        second: 'ਸੇਕੰਡ',
        minute: 'ਮਿੰਟ',
        hour: 'ਘੰਟੇ',
        day: 'ਦਿਨ',
        week: 'ਹਫ਼ਤੇ',
        month: 'ਮਹੀਨੇ',
        year: 'ਸਾਲ'
      }
    }
  },
  code: 'pa'
}
