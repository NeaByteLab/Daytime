import type * as Types from '@app/Types.ts'

/**
 * Tamil (ta) locale data.
 * @description Tamil locale for Daytime library.
 */
export const ta: Types.LocaleData = {
  dayNames: ['ஞாயிறு', 'திங்கள்', 'செவ்வாய்', 'புதன்', 'வியாழன்', 'வெள்ளி', 'சனி'],
  dayNamesShort: ['ஞா', 'தி', 'செ', 'பு', 'வி', 'வெ', 'ச'],
  monthNames: [
    'ஜனவரி',
    'பிப்ரவரி',
    'மார்ச்',
    'ஏப்ரல்',
    'மே',
    'ஜூன்',
    'ஜூலை',
    'ஆகஸ்ட்',
    'செப்டம்பர்',
    'அக்டோபர்',
    'நவம்பர்',
    'டிசம்பர்'
  ],
  monthNamesShort: ['ஜன', 'பிப்', 'மார்', 'ஏப்', 'மே', 'ஜூன்', 'ஜூலை', 'ஆக', 'செப்', 'அக்ட்', 'நவ', 'டிச'],
  relative: {
    now: 'இப்போது',
    past: '{value} {unit} முன்பு',
    future: '{value} {unit} கழித்து',
    units: {
      singular: {
        second: 'விநாடி',
        minute: 'நிமிடம்',
        hour: 'மணி',
        day: 'நாள்',
        week: 'வாரம்',
        month: 'மாதம்',
        year: 'வருடம்'
      },
      plural: {
        second: 'விநாடிகள்',
        minute: 'நிமிடங்கள்',
        hour: 'மணி',
        day: 'நாட்கள்',
        week: 'வாரங்கள்',
        month: 'மாதங்கள்',
        year: 'வருடங்கள்'
      }
    }
  },
  code: 'ta'
}
