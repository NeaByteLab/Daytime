import type * as Types from '@app/Types.ts'

/**
 * German (de) locale data.
 * @description German locale for Daytime library.
 */
export const de: Types.LocaleData = {
  dayNames: [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag'
  ],
  dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  monthNames: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mär',
    'Apr',
    'Mai',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dez'
  ],
  relative: {
    now: 'gerade jetzt',
    past: 'vor {value} {unit}',
    future: 'in {value} {unit}',
    units: {
      singular: {
        second: 'Sekunde',
        minute: 'Minute',
        hour: 'Stunde',
        day: 'Tag',
        week: 'Woche',
        month: 'Monat',
        year: 'Jahr'
      },
      plural: {
        second: 'Sekunden',
        minute: 'Minuten',
        hour: 'Stunden',
        day: 'Tage',
        week: 'Wochen',
        month: 'Monate',
        year: 'Jahre'
      }
    }
  },
  code: 'de'
}
