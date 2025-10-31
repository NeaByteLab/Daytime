import type * as Types from '@app/Types.ts'

/**
 * Yoruba (yo) locale data.
 * @description Yoruba locale for Daytime library.
 */
export const yo: Types.LocaleData = {
  dayNames: ['Ọjọ́ Àìkú', 'Ọjọ́ Ajé', 'Ọjọ́ Ìsẹ́gun', 'Ọjọ́rú', 'Ọjọ́bọ̀', 'Ọjọ́ Ẹtì', 'Ọjọ́ Àbámẹ́ta'],
  dayNamesShort: ['Àìkú', 'Ajé', 'Ìsẹ́gun', 'Ọjọ́rú', 'Ọjọ́bọ̀', 'Ẹtì', 'Àbámẹ́ta'],
  monthNames: [
    'Oṣù Ṣẹ́rẹ́',
    'Oṣù Èrèlé',
    'Oṣù Ẹrẹ̀nà',
    'Oṣù Ìgbé',
    'Oṣù Ẹ̀bibi',
    'Oṣù Òkúdu',
    'Oṣù Agẹmọ',
    'Oṣù Ògún',
    'Oṣù Owewe',
    'Oṣù Ọ̀wàrà',
    'Oṣù Bélú',
    'Oṣù Ọ̀pẹ̀'
  ],
  monthNamesShort: [
    'Ṣẹ́rẹ́',
    'Èrèlé',
    'Ẹrẹ̀nà',
    'Ìgbé',
    'Ẹ̀bibi',
    'Òkúdu',
    'Agẹmọ',
    'Ògún',
    'Owewe',
    'Ọ̀wàrà',
    'Bélú',
    'Ọ̀pẹ̀'
  ],
  relative: {
    now: 'ni bayi',
    past: '{value} {unit} sẹ́yìn',
    future: 'ní {value} {unit}',
    units: {
      singular: {
        second: 'ìṣẹ́jú',
        minute: 'ìṣẹ́jú',
        hour: 'wákàtí',
        day: 'ọjọ́',
        week: 'ọ̀sẹ̀',
        month: 'oṣù',
        year: 'ọdún'
      },
      plural: {
        second: 'ìṣẹ́jú',
        minute: 'ìṣẹ́jú',
        hour: 'àwọn wákàtí',
        day: 'ọjọ́',
        week: 'àwọn ọ̀sẹ̀',
        month: 'àwọn oṣù',
        year: 'àwọn ọdún'
      }
    }
  },
  code: 'yo'
}
