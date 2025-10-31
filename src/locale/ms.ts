import type * as Types from '@app/Types.ts'

/**
 * Malay (ms) locale data.
 * @description Malay locale for Daytime library.
 */
export const ms: Types.LocaleData = {
  dayNames: ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
  dayNamesShort: ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'],
  monthNames: [
    'Januari',
    'Februari',
    'Mac',
    'April',
    'Mei',
    'Jun',
    'Julai',
    'Ogos',
    'September',
    'Oktober',
    'November',
    'Disember'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mac',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Ogo',
    'Sep',
    'Okt',
    'Nov',
    'Dis'
  ],
  relative: {
    now: 'sekarang',
    past: '{value} {unit} yang lalu',
    future: 'dalam {value} {unit}',
    units: {
      singular: {
        second: 'saat',
        minute: 'minit',
        hour: 'jam',
        day: 'hari',
        week: 'minggu',
        month: 'bulan',
        year: 'tahun'
      },
      plural: {
        second: 'saat',
        minute: 'minit',
        hour: 'jam',
        day: 'hari',
        week: 'minggu',
        month: 'bulan',
        year: 'tahun'
      }
    }
  },
  code: 'ms'
}
