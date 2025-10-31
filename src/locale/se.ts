import type * as Types from '@app/Types.ts'

/**
 * Northern Sami (se) locale data.
 * @description Northern Sami locale for Daytime library.
 */
export const se: Types.LocaleData = {
  dayNames: [
    'Sotnabeaivi',
    'Vuossárga',
    'Maŋŋebárga',
    'Gaskavahkku',
    'Duorastat',
    'Bearjadat',
    'Lávvordat'
  ],
  dayNamesShort: ['Sotn', 'Vuos', 'Maŋ', 'Gask', 'Duor', 'Bear', 'Láv'],
  monthNames: [
    'Ođđajagemánnu',
    'Guovvamánnu',
    'Njukčamánnu',
    'Cuoŋománnu',
    'Miessemánnu',
    'Geassemánnu',
    'Suoidnemánnu',
    'Borgemánnu',
    'Čakčamánnu',
    'Golggotmánnu',
    'Skábmamánnu',
    'Juovlamánnu'
  ],
  monthNamesShort: [
    'Ođđj',
    'Guov',
    'Njuk',
    'Cuo',
    'Mies',
    'Geas',
    'Suoi',
    'Borg',
    'Čakč',
    'Golg',
    'Skáb',
    'Juov'
  ],
  relative: {
    now: 'dál',
    past: '{value} {unit} árat',
    future: '{value} {unit} geahčen',
    units: {
      singular: {
        second: 'sekunda',
        minute: 'minuhta',
        hour: 'diibmu',
        day: 'beaivi',
        week: 'vahku',
        month: 'mánnu',
        year: 'jáhki'
      },
      plural: {
        second: 'sekundat',
        minute: 'minuhtat',
        hour: 'diibmut',
        day: 'beaivvit',
        week: 'vahkut',
        month: 'mánut',
        year: 'jáhkit'
      }
    }
  },
  code: 'se'
}
