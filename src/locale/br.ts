import type * as Types from '@app/Types.ts'

/**
 * Breton (br) locale data.
 * @description Breton locale for Daytime library.
 */
export const br: Types.LocaleData = {
  dayNames: ['Sul', 'Lun', 'Meurzh', "Merc'her", 'Yaou', 'Gwener', 'Sadorn'],
  dayNamesShort: ['Sul', 'Lun', 'Meu', 'Mer', 'Yao', 'Gwe', 'Sad'],
  monthNames: [
    'Genver',
    "C'hwevrer",
    'Meurzh',
    'Ebrel',
    'Mae',
    'Mezheven',
    'Gouere',
    'Eost',
    'Gwengolo',
    'Here',
    'Du',
    'Kerzu'
  ],
  monthNamesShort: [
    'Gen',
    "C'hw",
    'Meu',
    'Ebr',
    'Mae',
    'Mez',
    'Gou',
    'Eos',
    'Gwe',
    'Her',
    'Du',
    'Ker'
  ],
  relative: {
    now: 'bremañ',
    past: "{value} {unit} 'zo",
    future: 'a-benn {value} {unit}',
    units: {
      singular: {
        second: 'eilenn',
        minute: 'munutenn',
        hour: 'eur',
        day: 'deiz',
        week: 'sizhun',
        month: 'miz',
        year: 'bloaz'
      },
      plural: {
        second: 'eilennoù',
        minute: 'munutennoù',
        hour: 'eurioù',
        day: 'deizioù',
        week: 'sizhunioù',
        month: 'mizioù',
        year: 'bloavezhioù'
      }
    }
  },
  code: 'br'
}
