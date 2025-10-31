import type * as Types from '@app/Types.ts'

/**
 * Finnish (fi) locale data.
 * @description Finnish locale for Daytime library.
 */
export const fi: Types.LocaleData = {
  dayNames: [
    'Sunnuntai',
    'Maanantai',
    'Tiistai',
    'Keskiviikko',
    'Torstai',
    'Perjantai',
    'Lauantai'
  ],
  dayNamesShort: ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'],
  monthNames: [
    'Tammikuu',
    'Helmikuu',
    'Maaliskuu',
    'Huhtikuu',
    'Toukokuu',
    'Kesäkuu',
    'Heinäkuu',
    'Elokuu',
    'Syyskuu',
    'Lokakuu',
    'Marraskuu',
    'Joulukuu'
  ],
  monthNamesShort: [
    'Tammi',
    'Helmi',
    'Maalis',
    'Huhti',
    'Touko',
    'Kesä',
    'Heinä',
    'Elo',
    'Syys',
    'Loka',
    'Marras',
    'Joulu'
  ],
  relative: {
    now: 'juuri nyt',
    past: '{value} {unit} sitten',
    future: '{value} {unit} kuluttua',
    units: {
      singular: {
        second: 'sekunti',
        minute: 'minuutti',
        hour: 'tunti',
        day: 'päivä',
        week: 'viikko',
        month: 'kuukausi',
        year: 'vuosi'
      },
      plural: {
        second: 'sekuntia',
        minute: 'minuuttia',
        hour: 'tuntia',
        day: 'päivää',
        week: 'viikkoa',
        month: 'kuukautta',
        year: 'vuotta'
      }
    }
  },
  code: 'fi'
}
