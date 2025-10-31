import type * as Types from '@app/Types.ts'

/**
 * Ukrainian (uk) locale data.
 * @description Ukrainian locale for Daytime library.
 */
export const uk: Types.LocaleData = {
  dayNames: [
    'Неділя',
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    "П'ятниця",
    'Субота'
  ],
  dayNamesShort: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  monthNames: [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень'
  ],
  monthNamesShort: [
    'Січ',
    'Лют',
    'Бер',
    'Кві',
    'Тра',
    'Чер',
    'Лип',
    'Сер',
    'Вер',
    'Жов',
    'Лис',
    'Гру'
  ],
  relative: {
    now: 'щойно',
    past: '{value} {unit} тому',
    future: 'через {value} {unit}',
    units: {
      singular: {
        second: 'секунду',
        minute: 'хвилину',
        hour: 'годину',
        day: 'день',
        week: 'тиждень',
        month: 'місяць',
        year: 'рік'
      },
      plural: {
        second: 'секунд',
        minute: 'хвилин',
        hour: 'годин',
        day: 'днів',
        week: 'тижнів',
        month: 'місяців',
        year: 'років'
      }
    }
  },
  code: 'uk'
}
