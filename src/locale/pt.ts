import type * as Types from '@app/Types.ts'

/**
 * Portuguese (pt) locale data.
 * @description Portuguese locale for Daytime library.
 */
export const pt: Types.LocaleData = {
  dayNames: [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ],
  relative: {
    now: 'agora',
    past: 'há {value} {unit}',
    future: 'em {value} {unit}',
    units: {
      singular: {
        second: 'segundo',
        minute: 'minuto',
        hour: 'hora',
        day: 'dia',
        week: 'semana',
        month: 'mês',
        year: 'ano'
      },
      plural: {
        second: 'segundos',
        minute: 'minutos',
        hour: 'horas',
        day: 'dias',
        week: 'semanas',
        month: 'meses',
        year: 'anos'
      }
    }
  },
  code: 'pt'
}
