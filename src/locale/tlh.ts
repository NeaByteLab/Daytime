import type * as Types from '@app/Types.ts'

/**
 * Klingon (tlh) locale data.
 * @description Klingon locale for Daytime library.
 */
export const tlh: Types.LocaleData = {
  dayNames: ['lojmItjaj', 'DaSjaj', 'povjaj', 'ghItlhjaj', 'loghjaj', 'buqjaj', 'ghInjaj'],
  dayNamesShort: ['loj', 'DaS', 'pov', 'ghIt', 'log', 'buq', 'ghIn'],
  monthNames: [
    "tera' jar wa'",
    "tera' jar cha'",
    "tera' jar wej",
    "tera' jar loS",
    "tera' jar vagh",
    "tera' jar jav",
    "tera' jar Soch",
    "tera' jar chorgh",
    "tera' jar Hut",
    "tera' jar wa'maH",
    "tera' jar wa'maH wa'",
    "tera' jar wa'maH cha'"
  ],
  monthNamesShort: [
    'jar 1',
    'jar 2',
    'jar 3',
    'jar 4',
    'jar 5',
    'jar 6',
    'jar 7',
    'jar 8',
    'jar 9',
    'jar 10',
    'jar 11',
    'jar 12'
  ],
  relative: {
    now: 'DaHjaj',
    past: '{value} {unit} ret',
    future: '{value} {unit} qan',
    units: {
      singular: {
        second: 'logh',
        minute: 'tup',
        hour: 'rep',
        day: 'jaj',
        week: 'leS',
        month: 'jar',
        year: 'DIS'
      },
      plural: {
        second: "loghpu'",
        minute: "tuppu'",
        hour: "repu'",
        day: 'jajmey',
        week: "leSpu'",
        month: 'jarmey',
        year: 'DISmey'
      }
    }
  },
  code: 'tlh'
}
