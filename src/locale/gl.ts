import type * as Types from '@app/Types.ts'

/**
 * Galician (gl) locale data.
 * @description Galician locale for Daytime library.
 */
export const gl: Types.LocaleData = {
  dayNames: ['Domingo', 'Luns', 'Martes', 'Mércores', 'Xoves', 'Venres', 'Sábado'],
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mér', 'Xov', 'Ven', 'Sáb'],
  monthNames: [
    'Xaneiro',
    'Febreiro',
    'Marzo',
    'Abril',
    'Maio',
    'Xuño',
    'Xullo',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Decembro'
  ],
  monthNamesShort: [
    'Xan',
    'Feb',
    'Mar',
    'Abr',
    'Mai',
    'Xuñ',
    'Xul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dec'
  ],
  relative: {
    now: 'agora',
    past: 'hai {value} {unit}',
    future: 'en {value} {unit}',
    units: {
      singular: {
        second: 'segundo',
        minute: 'minuto',
        hour: 'hora',
        day: 'día',
        week: 'semana',
        month: 'mes',
        year: 'ano'
      },
      plural: {
        second: 'segundos',
        minute: 'minutos',
        hour: 'horas',
        day: 'días',
        week: 'semanas',
        month: 'meses',
        year: 'anos'
      }
    }
  },
  code: 'gl'
}
