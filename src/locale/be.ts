import type * as Types from '@app/Types.ts'

/**
 * Belarusian (be) locale data.
 * @description Belarusian locale for Daytime library.
 */
export const be: Types.LocaleData = {
  dayNames: [
    'Нядзеля',
    'Панядзелак',
    'Аўторак',
    'Серада',
    'Чацвер',
    'Пятніца',
    'Субота'
  ],
  dayNamesShort: ['Нд', 'Пн', 'Аў', 'Ср', 'Чц', 'Пт', 'Сб'],
  monthNames: [
    'Студень',
    'Люты',
    'Сакавік',
    'Красавік',
    'Травень',
    'Чэрвень',
    'Ліпень',
    'Жнівень',
    'Верасень',
    'Кастрычнік',
    'Лістапад',
    'Снежань'
  ],
  monthNamesShort: [
    'Сту',
    'Лют',
    'Сак',
    'Крас',
    'Трав',
    'Чэр',
    'Ліп',
    'Жнів',
    'Вер',
    'Каст',
    'Ліст',
    'Снеж'
  ],
  relative: {
    now: 'толькі што',
    past: '{value} {unit} таму',
    future: 'праз {value} {unit}',
    units: {
      singular: {
        second: 'секунду',
        minute: 'хвіліну',
        hour: 'гадзіну',
        day: 'дзень',
        week: 'тыдзень',
        month: 'месяц',
        year: 'год'
      },
      plural: {
        second: 'секунд',
        minute: 'хвілін',
        hour: 'гадзін',
        day: 'дзён',
        week: 'тыдняў',
        month: 'месяцаў',
        year: 'гадоў'
      }
    }
  },
  code: 'be'
}
