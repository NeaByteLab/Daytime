import type * as Types from '@app/Types.ts'

/**
 * Maltese (mt) locale data.
 * @description Maltese locale for Daytime library.
 */
export const mt: Types.LocaleData = {
  dayNames: ['Il-Ħadd', 'It-Tnejn', 'It-Tlieta', 'L-Erbgħa', 'Il-Ħamis', 'Il-Ġimgħa', 'Is-Sibt'],
  dayNamesShort: ['Ħad', 'Tne', 'Tli', 'Erb', 'Ħam', 'Ġim', 'Sib'],
  monthNames: [
    'Jannar',
    'Frar',
    'Marzu',
    'April',
    'Mejju',
    'Ġunju',
    'Lulju',
    'Awwissu',
    'Settembru',
    'Ottubru',
    'Novembru',
    'Diċembru'
  ],
  monthNamesShort: [
    'Jan',
    'Fra',
    'Mar',
    'Apr',
    'Mej',
    'Ġun',
    'Lul',
    'Aww',
    'Set',
    'Ott',
    'Nov',
    'Diċ'
  ],
  relative: {
    now: 'issa',
    past: '{value} {unit} ilu',
    future: "f'{value} {unit}",
    units: {
      singular: {
        second: 'sekonda',
        minute: 'minuta',
        hour: 'siegħa',
        day: 'jum',
        week: 'ġimgħa',
        month: 'xahar',
        year: 'sena'
      },
      plural: {
        second: 'sekondi',
        minute: 'minuti',
        hour: 'sigħat',
        day: 'ijiem',
        week: 'ġimgħat',
        month: 'xhur',
        year: 'snin'
      }
    }
  },
  code: 'mt'
}
