import type * as Types from '@app/Types.ts'

/**
 * Croatian (hr) locale data.
 * @description Croatian locale for Daytime library.
 */
export const hr: Types.LocaleData = {
  dayNames: [
    'Nedjelja',
    'Ponedjeljak',
    'Utorak',
    'Srijeda',
    'Četvrtak',
    'Petak',
    'Subota'
  ],
  dayNamesShort: ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'],
  monthNames: [
    'Siječanj',
    'Veljača',
    'Ožujak',
    'Travanj',
    'Svibanj',
    'Lipanj',
    'Srpanj',
    'Kolovoz',
    'Rujan',
    'Listopad',
    'Studeni',
    'Prosinac'
  ],
  monthNamesShort: [
    'Sij',
    'Velj',
    'Ožu',
    'Tra',
    'Svi',
    'Lip',
    'Srp',
    'Kol',
    'Ruj',
    'Lis',
    'Stu',
    'Pro'
  ],
  relative: {
    now: 'upravo sada',
    past: 'prije {value} {unit}',
    future: 'za {value} {unit}',
    units: {
      singular: {
        second: 'sekundu',
        minute: 'minutu',
        hour: 'sat',
        day: 'dan',
        week: 'tjedan',
        month: 'mjesec',
        year: 'godinu'
      },
      plural: {
        second: 'sekundi',
        minute: 'minuta',
        hour: 'sati',
        day: 'dana',
        week: 'tjedana',
        month: 'mjeseci',
        year: 'godina'
      }
    }
  },
  code: 'hr'
}
