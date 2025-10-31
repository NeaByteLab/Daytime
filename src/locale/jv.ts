import type * as Types from '@app/Types.ts'

/**
 * Javanese (jv) locale data.
 * @description Javanese locale for Daytime library.
 */
export const jv: Types.LocaleData = {
  dayNames: ['Ahad', 'Senèn', 'Selasa', 'Rebo', 'Kemis', 'Jemuwah', 'Setu'],
  dayNamesShort: ['Ahd', 'Sen', 'Sel', 'Reb', 'Kem', 'Jem', 'Set'],
  monthNames: [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Agu',
    'Sep',
    'Okt',
    'Nov',
    'Des'
  ],
  relative: {
    now: 'saiki',
    past: '{value} {unit} kepungkur',
    future: 'sawisé {value} {unit}',
    units: {
      singular: {
        second: 'detik',
        minute: 'menit',
        hour: 'jam',
        day: 'dina',
        week: 'minggu',
        month: 'wulan',
        year: 'taun'
      },
      plural: {
        second: 'detik',
        minute: 'menit',
        hour: 'jam',
        day: 'dina',
        week: 'minggu',
        month: 'wulan',
        year: 'taun'
      }
    }
  },
  code: 'jv'
}
