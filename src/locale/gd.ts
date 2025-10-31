import type * as Types from '@app/Types.ts'

/**
 * Scottish Gaelic (gd) locale data.
 * @description Scottish Gaelic locale for Daytime library.
 */
export const gd: Types.LocaleData = {
  dayNames: [
    'Didòmhnaich',
    'Diluain',
    'Dimàirt',
    'Diciadain',
    'Diardaoin',
    'Dihaoine',
    'Disathairne'
  ],
  dayNamesShort: ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'],
  monthNames: [
    'Am Faoilleach',
    'An Gearran',
    'Am Màrt',
    'An Giblean',
    'An Cèitean',
    'An t-Ògmhios',
    'An t-Iuchar',
    'An Lùnastal',
    'An t-Sultain',
    'An Dàmhair',
    'An t-Samhain',
    'An Dùbhlachd'
  ],
  monthNamesShort: [
    'Faoi',
    'Gear',
    'Màrt',
    'Gibl',
    'Cèit',
    'Ògmh',
    'Iuch',
    'Lùna',
    'Sult',
    'Dàmh',
    'Samh',
    'Dùbh'
  ],
  relative: {
    now: 'an-dràsta',
    past: 'o chionn {value} {unit}',
    future: 'an {value} {unit}',
    units: {
      singular: {
        second: 'diog',
        minute: 'mionaid',
        hour: 'uair',
        day: 'latha',
        week: 'seachdain',
        month: 'mìos',
        year: 'bliadhna'
      },
      plural: {
        second: 'diogan',
        minute: 'mionaidean',
        hour: 'uairean',
        day: 'làithean',
        week: 'seachdainean',
        month: 'mìosan',
        year: 'bliadhnaichean'
      }
    }
  },
  code: 'gd'
}
