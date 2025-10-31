import type * as Types from '@app/Types.ts'

/**
 * Mongolian (mn) locale data.
 * @description Mongolian locale for Daytime library.
 */
export const mn: Types.LocaleData = {
  dayNames: ['Ням', 'Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба'],
  dayNamesShort: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
  monthNames: [
    'Нэгдүгээр сар',
    'Хоёрдугаар сар',
    'Гуравдугаар сар',
    'Дөрөвдүгээр сар',
    'Тавдугаар сар',
    'Зургадугаар сар',
    'Долдугаар сар',
    'Наймдугаар сар',
    'Есдүгээр сар',
    'Аравдугаар сар',
    'Арван нэгдүгээр сар',
    'Арван хоёрдугаар сар'
  ],
  monthNamesShort: [
    '1 сар',
    '2 сар',
    '3 сар',
    '4 сар',
    '5 сар',
    '6 сар',
    '7 сар',
    '8 сар',
    '9 сар',
    '10 сар',
    '11 сар',
    '12 сар'
  ],
  relative: {
    now: 'одоо',
    past: '{value} {unit} өмнө',
    future: '{value} {unit} дараа',
    units: {
      singular: {
        second: 'секунд',
        minute: 'минут',
        hour: 'цаг',
        day: 'өдөр',
        week: 'долоо хоног',
        month: 'сар',
        year: 'жил'
      },
      plural: {
        second: 'секунд',
        minute: 'минут',
        hour: 'цаг',
        day: 'өдөр',
        week: 'долоо хоног',
        month: 'сар',
        year: 'жил'
      }
    }
  },
  code: 'mn'
}
