import type * as Types from '@app/Types.ts'

/**
 * Kazakh (kk) locale data.
 * @description Kazakh locale for Daytime library.
 */
export const kk: Types.LocaleData = {
  dayNames: ['Жексенбі', 'Дүйсенбі', 'Сейсенбі', 'Сәрсенбі', 'Бейсенбі', 'Жұма', 'Сенбі'],
  dayNamesShort: ['Жек', 'Дүй', 'Сей', 'Сәр', 'Бей', 'Жұм', 'Сен'],
  monthNames: [
    'Қаңтар',
    'Ақпан',
    'Наурыз',
    'Сәуір',
    'Мамыр',
    'Маусым',
    'Шілде',
    'Тамыз',
    'Қыркүйек',
    'Қазан',
    'Қараша',
    'Желтоқсан'
  ],
  monthNamesShort: [
    'Қаң',
    'Ақп',
    'Нау',
    'Сәу',
    'Мам',
    'Мау',
    'Шіл',
    'Там',
    'Қыр',
    'Қаз',
    'Қар',
    'Жел'
  ],
  relative: {
    now: 'қазір',
    past: '{value} {unit} бұрын',
    future: '{value} {unit} кейін',
    units: {
      singular: {
        second: 'секунд',
        minute: 'минут',
        hour: 'сағат',
        day: 'күн',
        week: 'апта',
        month: 'ай',
        year: 'жыл'
      },
      plural: {
        second: 'секунд',
        minute: 'минут',
        hour: 'сағат',
        day: 'күн',
        week: 'апта',
        month: 'ай',
        year: 'жыл'
      }
    }
  },
  code: 'kk'
}
