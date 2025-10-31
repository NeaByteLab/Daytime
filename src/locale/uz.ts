import type * as Types from '@app/Types.ts'

/**
 * Uzbek (uz) locale data.
 * @description Uzbek locale for Daytime library.
 */
export const uz: Types.LocaleData = {
  dayNames: ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'],
  dayNamesShort: ['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan'],
  monthNames: [
    'Yanvar',
    'Fevral',
    'Mart',
    'Aprel',
    'May',
    'Iyun',
    'Iyul',
    'Avgust',
    'Sentabr',
    'Oktabr',
    'Noyabr',
    'Dekabr'
  ],
  monthNamesShort: [
    'Yan',
    'Fev',
    'Mar',
    'Apr',
    'May',
    'Iyun',
    'Iyul',
    'Avg',
    'Sen',
    'Okt',
    'Noy',
    'Dek'
  ],
  relative: {
    now: 'hozir',
    past: '{value} {unit} oldin',
    future: '{value} {unit} keyin',
    units: {
      singular: {
        second: 'soniya',
        minute: 'daqiqa',
        hour: 'soat',
        day: 'kun',
        week: 'hafta',
        month: 'oy',
        year: 'yil'
      },
      plural: {
        second: 'soniya',
        minute: 'daqiqa',
        hour: 'soat',
        day: 'kun',
        week: 'hafta',
        month: 'oy',
        year: 'yil'
      }
    }
  },
  code: 'uz'
}
