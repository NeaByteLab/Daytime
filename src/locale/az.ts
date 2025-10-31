import type * as Types from '@app/Types.ts'

/**
 * Azerbaijani (az) locale data.
 * @description Azerbaijani locale for Daytime library.
 */
export const az: Types.LocaleData = {
  dayNames: [
    'Bazar',
    'Bazar ertəsi',
    'Çərşənbə axşamı',
    'Çərşənbə',
    'Cümə axşamı',
    'Cümə',
    'Şənbə'
  ],
  dayNamesShort: ['Baz', 'Baz E', 'Çər Ax', 'Çər', 'Cüm Ax', 'Cüm', 'Şən'],
  monthNames: [
    'Yanvar',
    'Fevral',
    'Mart',
    'Aprel',
    'May',
    'İyun',
    'İyul',
    'Avqust',
    'Sentyabr',
    'Oktyabr',
    'Noyabr',
    'Dekabr'
  ],
  monthNamesShort: [
    'Yan',
    'Fev',
    'Mar',
    'Apr',
    'May',
    'İyn',
    'İyl',
    'Avq',
    'Sen',
    'Okt',
    'Noy',
    'Dek'
  ],
  relative: {
    now: 'indi',
    past: '{value} {unit} əvvəl',
    future: '{value} {unit} sonra',
    units: {
      singular: {
        second: 'saniyə',
        minute: 'dəqiqə',
        hour: 'saat',
        day: 'gün',
        week: 'həftə',
        month: 'ay',
        year: 'il'
      },
      plural: {
        second: 'saniyə',
        minute: 'dəqiqə',
        hour: 'saat',
        day: 'gün',
        week: 'həftə',
        month: 'ay',
        year: 'il'
      }
    }
  },
  code: 'az'
}
