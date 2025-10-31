import type * as Types from '@app/Types.ts'

/**
 * Italian (it) locale data.
 * @description Italian locale for Daytime library.
 */
export const it: Types.LocaleData = {
  dayNames: [
    'Domenica',
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato'
  ],
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
  monthNames: [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre'
  ],
  monthNamesShort: [
    'Gen',
    'Feb',
    'Mar',
    'Apr',
    'Mag',
    'Giu',
    'Lug',
    'Ago',
    'Set',
    'Ott',
    'Nov',
    'Dic'
  ],
  relative: {
    now: 'adesso',
    past: '{value} {unit} fa',
    future: 'tra {value} {unit}',
    units: {
      singular: {
        second: 'secondo',
        minute: 'minuto',
        hour: 'ora',
        day: 'giorno',
        week: 'settimana',
        month: 'mese',
        year: 'anno'
      },
      plural: {
        second: 'secondi',
        minute: 'minuti',
        hour: 'ore',
        day: 'giorni',
        week: 'settimane',
        month: 'mesi',
        year: 'anni'
      }
    }
  },
  code: 'it'
}
