import type * as Types from '@app/Types.ts'

/**
 * Kyrgyz (ky) locale data.
 * @description Kyrgyz locale for Daytime library.
 */
export const ky: Types.LocaleData = {
  dayNames: ['Жекшемби', 'Дүйшөмбү', 'Шейшемби', 'Шаршемби', 'Бейшемби', 'Жума', 'Ишемби'],
  dayNamesShort: ['Жек', 'Дүй', 'Шей', 'Шар', 'Бей', 'Жум', 'Ише'],
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
    now: 'азыр',
    past: '{value} {unit} мурун',
    future: '{value} {unit} кийин',
    units: {
      singular: {
        second: 'секунда',
        minute: 'минут',
        hour: 'саат',
        day: 'күн',
        week: 'апта',
        month: 'ай',
        year: 'жыл'
      },
      plural: {
        second: 'секунда',
        minute: 'минут',
        hour: 'саат',
        day: 'күн',
        week: 'апта',
        month: 'ай',
        year: 'жыл'
      }
    }
  },
  code: 'ky'
}
