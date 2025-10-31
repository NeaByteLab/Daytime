import type * as Types from '@app/Types.ts'

/**
 * Tajik (tg) locale data.
 * @description Tajik locale for Daytime library.
 */
export const tg: Types.LocaleData = {
  dayNames: ['Якшанбе', 'Душанбе', 'Сешанбе', 'Чоршанбе', 'Панҷшанбе', 'Ҷумъа', 'Шанбе'],
  dayNamesShort: ['Яш', 'Дш', 'Сш', 'Чш', 'Пш', 'Ҷм', 'Шн'],
  monthNames: [
    'Январ',
    'Феврал',
    'Март',
    'Апрел',
    'Май',
    'Июн',
    'Июл',
    'Август',
    'Сентябр',
    'Октябр',
    'Ноябр',
    'Декабр'
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
    now: 'ҳозир',
    past: '{value} {unit} пеш',
    future: 'баъд аз {value} {unit}',
    units: {
      singular: {
        second: 'сония',
        minute: 'дақиқа',
        hour: 'соат',
        day: 'рӯз',
        week: 'ҳафта',
        month: 'моҳ',
        year: 'сол'
      },
      plural: {
        second: 'сония',
        minute: 'дақиқа',
        hour: 'соат',
        day: 'рӯз',
        week: 'ҳафта',
        month: 'моҳ',
        year: 'сол'
      }
    }
  },
  code: 'tg'
}
