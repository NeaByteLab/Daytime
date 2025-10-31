import type * as Types from '@app/Types.ts'

/**
 * Khmer (km) locale data.
 * @description Khmer locale for Daytime library.
 */
export const km: Types.LocaleData = {
  dayNames: ['ថ្ងៃអាទិត្យ', 'ថ្ងៃច័ន្ទ', 'ថ្ងៃអង្គារ', 'ថ្ងៃពុធ', 'ថ្ងៃព្រហស្បតិ៍', 'ថ្ងៃសុក្រ', 'ថ្ងៃសៅរ៍'],
  dayNamesShort: ['អា', 'ច', 'អ', 'ពុ', 'ព្រ', 'សុ', 'ស'],
  monthNames: [
    'មករា',
    'កុម្ភៈ',
    'មីនា',
    'មេសា',
    'ឧសភា',
    'មិថុនា',
    'កក្កដា',
    'សីហា',
    'កញ្ញា',
    'តុលា',
    'វិច្ឆិកា',
    'ធ្នូ'
  ],
  monthNamesShort: ['មក', 'កុ', 'មី', 'មេ', 'ឧស', 'មិ', 'កក្ក', 'សី', 'កញ្ញ', 'តុ', 'វិ', 'ធ្ន'],
  relative: {
    now: 'ឥឡូវនេះ',
    past: '{value} {unit} មុន',
    future: 'ក្នុងរយៈពេល {value} {unit}',
    units: {
      singular: {
        second: 'វិនាទី',
        minute: 'នាទី',
        hour: 'ម៉ោង',
        day: 'ថ្ងៃ',
        week: 'សប្តាហ៍',
        month: 'ខែ',
        year: 'ឆ្នាំ'
      },
      plural: {
        second: 'វិនាទី',
        minute: 'នាទី',
        hour: 'ម៉ោង',
        day: 'ថ្ងៃ',
        week: 'សប្តាហ៍',
        month: 'ខែ',
        year: 'ឆ្នាំ'
      }
    }
  },
  code: 'km'
}
