import type * as Types from '@app/Types.ts'

/**
 * Bambara (bm) locale data.
 * @description Bambara locale for Daytime library.
 */
export const bm: Types.LocaleData = {
  dayNames: ['Kari', 'Ntɛnɛn', 'Tarata', 'Araba', 'Alamisa', 'Juma', 'Sibiri'],
  dayNamesShort: ['Kar', 'Ntɛ', 'Tar', 'Ara', 'Ala', 'Jum', 'Sib'],
  monthNames: [
    'Zanwuyɛ',
    'Fɛburuyɛ',
    'Marisi',
    'Awirili',
    'Mɛ',
    'Zuwɛn',
    'Zuluye',
    'Uti',
    'Sɛtanburu',
    'ɔkutɔburu',
    'Nowanburu',
    'Desanburu'
  ],
  monthNamesShort: [
    'Zan',
    'Fɛb',
    'Mar',
    'Awi',
    'Mɛ',
    'Zuw',
    'Zul',
    'Uti',
    'Sɛt',
    'ɔku',
    'Now',
    'Des'
  ],
  relative: {
    now: 'sisan',
    past: 'a bɛ {value} {unit} kɔ',
    future: 'ni {value} {unit} kɛnɛ',
    units: {
      singular: {
        second: 'sekɔn',
        minute: 'miniti',
        hour: 'lɛrɛ',
        day: 'don',
        week: 'dɔgɔkun',
        month: 'kalo',
        year: 'san'
      },
      plural: {
        second: 'sekɔn',
        minute: 'miniti',
        hour: 'lɛrɛ',
        day: 'don',
        week: 'dɔgɔkun',
        month: 'kalo',
        year: 'san'
      }
    }
  },
  code: 'bm'
}
