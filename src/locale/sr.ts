import type * as Types from '@app/Types.ts'

/**
 * Serbian (sr) locale data.
 * @description Serbian locale for Daytime library.
 */
export const sr: Types.LocaleData = {
  dayNames: ['Недеља', 'Понедељак', 'Уторак', 'Среда', 'Четвртак', 'Петак', 'Субота'],
  dayNamesShort: ['Нед', 'Пон', 'Уто', 'Сре', 'Чет', 'Пет', 'Суб'],
  monthNames: [
    'Јануар',
    'Фебруар',
    'Март',
    'Април',
    'Мај',
    'Јун',
    'Јул',
    'Август',
    'Септембар',
    'Октобар',
    'Новембар',
    'Децембар'
  ],
  monthNamesShort: [
    'Јан',
    'Феб',
    'Мар',
    'Апр',
    'Мај',
    'Јун',
    'Јул',
    'Авг',
    'Сеп',
    'Окт',
    'Нов',
    'Дец'
  ],
  relative: {
    now: 'сада',
    past: 'пре {value} {unit}',
    future: 'за {value} {unit}',
    units: {
      singular: {
        second: 'секунду',
        minute: 'минут',
        hour: 'сат',
        day: 'дан',
        week: 'недељу',
        month: 'месец',
        year: 'годину'
      },
      plural: {
        second: 'секунди',
        minute: 'минута',
        hour: 'сати',
        day: 'дана',
        week: 'недеља',
        month: 'месеци',
        year: 'година'
      }
    }
  },
  code: 'sr'
}
