import type * as Types from '@app/Types.ts'

/**
 * Slovak (sk) locale data.
 * @description Slovak locale for Daytime library.
 */
export const sk: Types.LocaleData = {
  dayNames: [
    'Nedeľa',
    'Pondelok',
    'Utorok',
    'Streda',
    'Štvrtok',
    'Piatok',
    'Sobota'
  ],
  dayNamesShort: ['Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So'],
  monthNames: [
    'Január',
    'Február',
    'Marec',
    'Apríl',
    'Máj',
    'Jún',
    'Júl',
    'August',
    'September',
    'Október',
    'November',
    'December'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Máj',
    'Jún',
    'Júl',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dec'
  ],
  relative: {
    now: 'teraz',
    past: 'pred {value} {unit}',
    future: 'o {value} {unit}',
    units: {
      singular: {
        second: 'sekundu',
        minute: 'minútu',
        hour: 'hodinu',
        day: 'deň',
        week: 'týždeň',
        month: 'mesiac',
        year: 'rok'
      },
      plural: {
        second: 'sekúnd',
        minute: 'minút',
        hour: 'hodín',
        day: 'dní',
        week: 'týždňov',
        month: 'mesiacov',
        year: 'rokov'
      }
    }
  },
  code: 'sk'
}
