import type * as Types from '@app/Types.ts'

/**
 * Faroese (fo) locale data.
 * @description Faroese locale for Daytime library.
 */
export const fo: Types.LocaleData = {
  dayNames: [
    'Sunnudagur',
    'Mánadagur',
    'Týsdagur',
    'Mikudagur',
    'Hósdagur',
    'Fríggjadagur',
    'Leygardagur'
  ],
  dayNamesShort: ['Sun', 'Mán', 'Týs', 'Mik', 'Hós', 'Frí', 'Ley'],
  monthNames: [
    'Januar',
    'Februar',
    'Mars',
    'Apríl',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'Septembur',
    'Oktober',
    'November',
    'Desembur'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mai',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Des'
  ],
  relative: {
    now: 'nú',
    past: 'fyrir {value} {unit} síðan',
    future: 'eftir {value} {unit}',
    units: {
      singular: {
        second: 'sekund',
        minute: 'minutt',
        hour: 'tíma',
        day: 'dag',
        week: 'viku',
        month: 'mánað',
        year: 'ári'
      },
      plural: {
        second: 'sekundir',
        minute: 'minuttir',
        hour: 'tímar',
        day: 'dagar',
        week: 'vikur',
        month: 'mánaðir',
        year: 'ár'
      }
    }
  },
  code: 'fo'
}
