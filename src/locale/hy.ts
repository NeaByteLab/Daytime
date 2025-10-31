import type * as Types from '@app/Types.ts'

/**
 * Armenian (hy) locale data.
 * @description Armenian locale for Daytime library.
 */
export const hy: Types.LocaleData = {
  dayNames: ['Կիրակի', 'Երկուշաբթի', 'Երեքշաբթի', 'Չորեքշաբթի', 'Հինգշաբթի', 'Ուրբաթ', 'Շաբաթ'],
  dayNamesShort: ['Կիր', 'Երկ', 'Երե', 'Չոր', 'Հին', 'Ուրբ', 'Շաբ'],
  monthNames: [
    'Հունվար',
    'Փետրվար',
    'Մարտ',
    'Ապրիլ',
    'Մայիս',
    'Հունիս',
    'Հուլիս',
    'Օգոստոս',
    'Սեպտեմբեր',
    'Հոկտեմբեր',
    'Նոյեմբեր',
    'Դեկտեմբեր'
  ],
  monthNamesShort: [
    'Հնվ',
    'Փտր',
    'Մրտ',
    'Ապր',
    'Մյս',
    'Հնս',
    'Հլս',
    'Օգս',
    'Սեպ',
    'Հոկ',
    'Նոյ',
    'Դեկ'
  ],
  relative: {
    now: 'հիմա',
    past: '{value} {unit} առաջ',
    future: '{value} {unit} հետո',
    units: {
      singular: {
        second: 'վայրկյան',
        minute: 'րոպե',
        hour: 'ժամ',
        day: 'օր',
        week: 'շաբաթ',
        month: 'ամիս',
        year: 'տարի'
      },
      plural: {
        second: 'վայրկյան',
        minute: 'րոպե',
        hour: 'ժամ',
        day: 'օր',
        week: 'շաբաթ',
        month: 'ամիս',
        year: 'տարի'
      }
    }
  },
  code: 'hy'
}
