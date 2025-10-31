import type * as Types from '@app/Types.ts'

/**
 * Indonesian (id) locale data.
 * @description Indonesian locale for Daytime library.
 */
export const id: Types.LocaleData = {
  dayNames: [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu'
  ],
  dayNamesShort: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
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
    now: 'baru saja',
    past: '{value} {unit} yang lalu',
    future: 'dalam {value} {unit}',
    units: {
      singular: {
        second: 'detik',
        minute: 'menit',
        hour: 'jam',
        day: 'hari',
        week: 'minggu',
        month: 'bulan',
        year: 'tahun'
      },
      plural: {
        second: 'detik',
        minute: 'menit',
        hour: 'jam',
        day: 'hari',
        week: 'minggu',
        month: 'bulan',
        year: 'tahun'
      }
    }
  },
  code: 'id'
}
