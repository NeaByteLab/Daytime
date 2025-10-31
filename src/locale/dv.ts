import type * as Types from '@app/Types.ts'

/**
 * Dhivehi (dv) locale data.
 * @description Dhivehi locale for Daytime library.
 */
export const dv: Types.LocaleData = {
  dayNames: ['އާދިއްތަ', 'ހޯމަ', 'އަންގާރަ', 'ބުދަ', 'ބުރާސްފަތި', 'ހުކުރަ', 'ހޮނިހިރަ'],
  dayNamesShort: ['އާދި', 'ހޯމަ', 'އަން', 'ބުދަ', 'ބުރާ', 'ހުކު', 'ހޮނި'],
  monthNames: [
    'ޖެނުއަރީ',
    'ފެބްރުއަރީ',
    'މާރިޗު',
    'އޭޕްރިލް',
    'މެއި',
    'ޖޫން',
    'ޖުލައި',
    'އޯގަސްޓު',
    'ސެޕްޓެމްބަރު',
    'އޮކްޓޯބަރު',
    'ނޮވެމްބަރު',
    'ޑިސެމްބަރު'
  ],
  monthNamesShort: ['ޖެނު', 'ފެބް', 'މާރި', 'އޭޕް', 'މެއި', 'ޖޫން', 'ޖުލަ', 'އޯގަ', 'ސެޕް', 'އޮކް', 'ނޮވެ', 'ޑިސެ'],
  relative: {
    now: 'މިހާރު',
    past: '{value} {unit} ކުރިން',
    future: '{value} {unit} ފަހުން',
    units: {
      singular: {
        second: 'ސިކުންތު',
        minute: 'މިނިޓު',
        hour: 'ގަޑިއިރު',
        day: 'ދުވަސް',
        week: 'ހަފްތާ',
        month: 'މަސް',
        year: 'އަހަރު'
      },
      plural: {
        second: 'ސިކުންތު',
        minute: 'މިނިޓު',
        hour: 'ގަޑިއިރު',
        day: 'ދުވަސް',
        week: 'ހަފްތާ',
        month: 'މަސް',
        year: 'އަހަރު'
      }
    }
  },
  code: 'dv'
}
