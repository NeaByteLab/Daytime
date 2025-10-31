import type * as Types from '@app/Types.ts'

/**
 * Welsh (cy) locale data.
 * @description Welsh locale for Daytime library.
 */
export const cy: Types.LocaleData = {
  dayNames: [
    'Dydd Sul',
    'Dydd Llun',
    'Dydd Mawrth',
    'Dydd Mercher',
    'Dydd Iau',
    'Dydd Gwener',
    'Dydd Sadwrn'
  ],
  dayNamesShort: ['Sul', 'Llun', 'Maw', 'Mer', 'Iau', 'Gwe', 'Sad'],
  monthNames: [
    'Ionawr',
    'Chwefror',
    'Mawrth',
    'Ebrill',
    'Mai',
    'Mehefin',
    'Gorffennaf',
    'Awst',
    'Medi',
    'Hydref',
    'Tachwedd',
    'Rhagfyr'
  ],
  monthNamesShort: [
    'Ion',
    'Chwe',
    'Maw',
    'Ebr',
    'Mai',
    'Meh',
    'Gor',
    'Aws',
    'Med',
    'Hyd',
    'Tach',
    'Rhag'
  ],
  relative: {
    now: 'nawr',
    past: '{value} {unit} yn ôl',
    future: 'mewn {value} {unit}',
    units: {
      singular: {
        second: 'eiliad',
        minute: 'munud',
        hour: 'awr',
        day: 'diwrnod',
        week: 'wythnos',
        month: 'mis',
        year: 'blwyddyn'
      },
      plural: {
        second: 'eiliad',
        minute: 'munud',
        hour: 'awr',
        day: 'diwrnod',
        week: 'wythnos',
        month: 'mis',
        year: 'blynyddoedd'
      }
    }
  },
  code: 'cy'
}
