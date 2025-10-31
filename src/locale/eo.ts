import type * as Types from '@app/Types.ts'

/**
 * Esperanto (eo) locale data.
 * @description Esperanto locale for Daytime library.
 */
export const eo: Types.LocaleData = {
  dayNames: ['Dimanĉo', 'Lundo', 'Mardo', 'Merkredo', 'Ĵaŭdo', 'Vendredo', 'Sabato'],
  dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Ĵaŭ', 'Ven', 'Sab'],
  monthNames: [
    'Januaro',
    'Februaro',
    'Marto',
    'Aprilo',
    'Majo',
    'Junio',
    'Julio',
    'Aŭgusto',
    'Septembro',
    'Oktobro',
    'Novembro',
    'Decembro'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Maj',
    'Jun',
    'Jul',
    'Aŭg',
    'Sep',
    'Okt',
    'Nov',
    'Dec'
  ],
  relative: {
    now: 'nun',
    past: 'antaŭ {value} {unit}',
    future: 'post {value} {unit}',
    units: {
      singular: {
        second: 'sekundo',
        minute: 'minuto',
        hour: 'horo',
        day: 'tago',
        week: 'semajno',
        month: 'monato',
        year: 'jaro'
      },
      plural: {
        second: 'sekundoj',
        minute: 'minutoj',
        hour: 'horoj',
        day: 'tagoj',
        week: 'semajnoj',
        month: 'monatoj',
        year: 'jaroj'
      }
    }
  },
  code: 'eo'
}
