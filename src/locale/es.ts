import type * as Types from '@app/Types.ts'

/**
 * Spanish (es) locale data.
 * @description Spanish locale for Daytime library.
 */
export const es: Types.LocaleData = {
  dayNames: [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
  ],
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ],
  monthNamesShort: [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic'
  ],
  relative: {
    now: 'ahora mismo',
    past: 'hace {value} {unit}',
    future: 'en {value} {unit}',
    units: {
      singular: {
        second: 'segundo',
        minute: 'minuto',
        hour: 'hora',
        day: 'día',
        week: 'semana',
        month: 'mes',
        year: 'año'
      },
      plural: {
        second: 'segundos',
        minute: 'minutos',
        hour: 'horas',
        day: 'días',
        week: 'semanas',
        month: 'meses',
        year: 'años'
      }
    }
  },
  code: 'es'
}
