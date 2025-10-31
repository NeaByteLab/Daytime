import type * as Types from '@app/Types.ts'

/**
 * Hungarian (hu) locale data.
 * @description Hungarian locale for Daytime library.
 */
export const hu: Types.LocaleData = {
  dayNames: [
    'Vasárnap',
    'Hétfő',
    'Kedd',
    'Szerda',
    'Csütörtök',
    'Péntek',
    'Szombat'
  ],
  dayNamesShort: ['Vas', 'Hét', 'Ked', 'Sze', 'Csü', 'Pén', 'Szo'],
  monthNames: [
    'Január',
    'Február',
    'Március',
    'Április',
    'Május',
    'Június',
    'Július',
    'Augusztus',
    'Szeptember',
    'Október',
    'November',
    'December'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Már',
    'Ápr',
    'Máj',
    'Jún',
    'Júl',
    'Aug',
    'Sze',
    'Okt',
    'Nov',
    'Dec'
  ],
  relative: {
    now: 'éppen most',
    past: '{value} {unit} ezelőtt',
    future: '{value} {unit} múlva',
    units: {
      singular: {
        second: 'másodperc',
        minute: 'perc',
        hour: 'óra',
        day: 'nap',
        week: 'hét',
        month: 'hónap',
        year: 'év'
      },
      plural: {
        second: 'másodperc',
        minute: 'perc',
        hour: 'óra',
        day: 'nap',
        week: 'hét',
        month: 'hónap',
        year: 'év'
      }
    }
  },
  code: 'hu'
}
