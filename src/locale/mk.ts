import type * as Types from '@app/Types.ts'

/**
 * Macedonian (mk) locale data.
 * @description Macedonian locale for Daytime library.
 */
export const mk: Types.LocaleData = {
  dayNames: ['Недела', 'Понеделник', 'Вторник', 'Среда', 'Четврток', 'Петок', 'Сабота'],
  dayNamesShort: ['Нед', 'Пон', 'Вто', 'Сре', 'Чет', 'Пет', 'Саб'],
  monthNames: [
    'Јануари',
    'Февруари',
    'Март',
    'Април',
    'Мај',
    'Јуни',
    'Јули',
    'Август',
    'Септември',
    'Октомври',
    'Ноември',
    'Декември'
  ],
  monthNamesShort: [
    'Јан',
    'Фев',
    'Мар',
    'Апр',
    'Мај',
    'Јун',
    'Јул',
    'Авг',
    'Сеп',
    'Окт',
    'Ноем',
    'Дек'
  ],
  relative: {
    now: 'сега',
    past: 'пред {value} {unit}',
    future: 'за {value} {unit}',
    units: {
      singular: {
        second: 'секунда',
        minute: 'минута',
        hour: 'час',
        day: 'ден',
        week: 'недела',
        month: 'месец',
        year: 'година'
      },
      plural: {
        second: 'секунди',
        minute: 'минути',
        hour: 'часа',
        day: 'дена',
        week: 'недели',
        month: 'месеци',
        year: 'години'
      }
    }
  },
  code: 'mk'
}
