import type * as Types from '@app/Types.ts'

/**
 * Chuvash (cv) locale data.
 * @description Chuvash locale for Daytime library.
 */
export const cv: Types.LocaleData = {
  dayNames: ['Вырсарникун', 'Тунтикун', 'Ылтăникун', 'Юнкун', 'Кĕçнерникун', 'Эрнекун', 'Шăматкун'],
  dayNamesShort: ['Выр', 'Тун', 'Ылт', 'Юн', 'Кĕç', 'Эрн', 'Шăм'],
  monthNames: [
    'Кăрлач',
    'Нарăс',
    'Пуш',
    'Ака',
    'Çу',
    'Çĕртме',
    'Утă',
    'Çурла',
    'Авăн',
    'Юпа',
    'Чӳк',
    'Раштав'
  ],
  monthNamesShort: [
    'Кăр',
    'Нар',
    'Пуш',
    'Ака',
    'Çу',
    'Çĕр',
    'Утă',
    'Çур',
    'Авă',
    'Юпа',
    'Чӳк',
    'Раш'
  ],
  relative: {
    now: 'халĕ',
    past: '{value} {unit} каялла',
    future: '{value} {unit} кайран',
    units: {
      singular: {
        second: 'секунд',
        minute: 'минут',
        hour: 'сехет',
        day: 'кун',
        week: 'эрне',
        month: 'уйăх',
        year: 'çул'
      },
      plural: {
        second: 'секунд',
        minute: 'минут',
        hour: 'сехет',
        day: 'кун',
        week: 'эрне',
        month: 'уйăх',
        year: 'çул'
      }
    }
  },
  code: 'cv'
}
