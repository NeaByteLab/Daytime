import type * as Types from '@app/Types.ts'

/**
 * Russian (ru) locale data.
 * @description Russian locale for Daytime library.
 */
export const ru: Types.LocaleData = {
  dayNames: [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ],
  dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  monthNames: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ],
  monthNamesShort: [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек'
  ],
  relative: {
    now: 'только что',
    past: '{value} {unit} назад',
    future: 'через {value} {unit}',
    units: {
      singular: {
        second: 'секунду',
        minute: 'минуту',
        hour: 'час',
        day: 'день',
        week: 'неделю',
        month: 'месяц',
        year: 'год'
      },
      plural: {
        second: 'секунд',
        minute: 'минут',
        hour: 'часов',
        day: 'дней',
        week: 'недель',
        month: 'месяцев',
        year: 'лет'
      }
    }
  },
  code: 'ru'
}
