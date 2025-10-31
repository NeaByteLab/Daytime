import type * as Types from '@app/Types.ts'

/**
 * Icelandic (is) locale data.
 * @description Icelandic locale for Daytime library.
 */
export const is: Types.LocaleData = {
  dayNames: [
    'Sunnudagur',
    'Mánudagur',
    'Þriðjudagur',
    'Miðvikudagur',
    'Fimmtudagur',
    'Föstudagur',
    'Laugardagur'
  ],
  dayNamesShort: ['Sun', 'Mán', 'Þri', 'Mið', 'Fim', 'Fös', 'Lau'],
  monthNames: [
    'Janúar',
    'Febrúar',
    'Mars',
    'Apríl',
    'Maí',
    'Júní',
    'Júlí',
    'Ágúst',
    'September',
    'Október',
    'Nóvember',
    'Desember'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Maí',
    'Jún',
    'Júl',
    'Ágú',
    'Sep',
    'Okt',
    'Nóv',
    'Des'
  ],
  relative: {
    now: 'núna',
    past: 'fyrir {value} {unit} síðan',
    future: 'eftir {value} {unit}',
    units: {
      singular: {
        second: 'sekúndu',
        minute: 'mínútu',
        hour: 'klukkutíma',
        day: 'dag',
        week: 'viku',
        month: 'mánuð',
        year: 'ári'
      },
      plural: {
        second: 'sekúndur',
        minute: 'mínútur',
        hour: 'klukkutímar',
        day: 'daga',
        week: 'vikur',
        month: 'mánuði',
        year: 'ár'
      }
    }
  },
  code: 'is'
}
