import type * as Types from '@app/Types.ts'

/**
 * Uyghur (ug) locale data.
 * @description Uyghur locale for Daytime library.
 */
export const ug: Types.LocaleData = {
  dayNames: ['يەكشەنبە', 'دۈشەنبە', 'سەيشەنبە', 'چارشەنبە', 'پەيشەنبە', 'جۈمە', 'شەنبە'],
  dayNamesShort: ['يە', 'دۈ', 'سە', 'چا', 'پە', 'جۈ', 'شە'],
  monthNames: [
    'يانۋار',
    'فېۋرال',
    'مارت',
    'ئاپرېل',
    'ماي',
    'ئىيۇن',
    'ئىيۇل',
    'ئاۋغۇست',
    'سېنتەبىر',
    'ئۆكتەبىر',
    'نويابىر',
    'دېكابىر'
  ],
  monthNamesShort: [
    'يان',
    'فېۋ',
    'مار',
    'ئاپر',
    'ماي',
    'ئىيۇن',
    'ئىيۇل',
    'ئاۋ',
    'سېن',
    'ئۆكت',
    'نويا',
    'دېكا'
  ],
  relative: {
    now: 'ھازىر',
    past: '{value} {unit} ئىلگىرى',
    future: '{value} {unit} كېيىن',
    units: {
      singular: {
        second: 'سېكۇنت',
        minute: 'مىنۇت',
        hour: 'سائەت',
        day: 'كۈن',
        week: 'ھەپتە',
        month: 'ئاي',
        year: 'يىل'
      },
      plural: {
        second: 'سېكۇنت',
        minute: 'مىنۇت',
        hour: 'سائەت',
        day: 'كۈن',
        week: 'ھەپتە',
        month: 'ئاي',
        year: 'يىل'
      }
    }
  },
  code: 'ug'
}
