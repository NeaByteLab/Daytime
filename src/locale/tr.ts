import type * as Types from '@app/Types.ts'

/**
 * Turkish (tr) locale data.
 * @description Turkish locale for Daytime library.
 */
export const tr: Types.LocaleData = {
  dayNames: [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi'
  ],
  dayNamesShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
  monthNames: [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
  ],
  monthNamesShort: [
    'Oca',
    'Şub',
    'Mar',
    'Nis',
    'May',
    'Haz',
    'Tem',
    'Ağu',
    'Eyl',
    'Eki',
    'Kas',
    'Ara'
  ],
  relative: {
    now: 'şimdi',
    past: '{value} {unit} önce',
    future: '{value} {unit} sonra',
    units: {
      singular: {
        second: 'saniye',
        minute: 'dakika',
        hour: 'saat',
        day: 'gün',
        week: 'hafta',
        month: 'ay',
        year: 'yıl'
      },
      plural: {
        second: 'saniye',
        minute: 'dakika',
        hour: 'saat',
        day: 'gün',
        week: 'hafta',
        month: 'ay',
        year: 'yıl'
      }
    }
  },
  code: 'tr'
}
