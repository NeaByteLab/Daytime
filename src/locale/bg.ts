import type * as Types from '@app/Types.ts'

/**
 * Bulgarian (bg) locale data.
 * @description Bulgarian locale for Daytime library.
 */
export const bg: Types.LocaleData = {
  dayNames: [
    'Неделя',
    'Понеделник',
    'Вторник',
    'Сряда',
    'Четвъртък',
    'Петък',
    'Събота'
  ],
  dayNamesShort: ['Нед', 'Пон', 'Вто', 'Сря', 'Чет', 'Пет', 'Съб'],
  monthNames: [
    'Януари',
    'Февруари',
    'Март',
    'Април',
    'Май',
    'Юни',
    'Юли',
    'Август',
    'Септември',
    'Октомври',
    'Ноември',
    'Декември'
  ],
  monthNamesShort: [
    'Яну',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Юни',
    'Юли',
    'Авг',
    'Сеп',
    'Окт',
    'Ноем',
    'Дек'
  ],
  relative: {
    now: 'току-що',
    past: 'преди {value} {unit}',
    future: 'след {value} {unit}',
    units: {
      singular: {
        second: 'секунда',
        minute: 'минута',
        hour: 'час',
        day: 'ден',
        week: 'седмица',
        month: 'месец',
        year: 'година'
      },
      plural: {
        second: 'секунди',
        minute: 'минути',
        hour: 'часа',
        day: 'дни',
        week: 'седмици',
        month: 'месеца',
        year: 'години'
      }
    }
  },
  code: 'bg'
}
