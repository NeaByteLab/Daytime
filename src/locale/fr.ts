import type * as Types from '@app/Types.ts'

/**
 * French (fr) locale data.
 * @description French locale for Daytime library.
 */
export const fr: Types.LocaleData = {
  dayNames: [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi'
  ],
  dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ],
  monthNamesShort: [
    'Jan',
    'Fév',
    'Mar',
    'Avr',
    'Mai',
    'Juin',
    'Juil',
    'Aoû',
    'Sep',
    'Oct',
    'Nov',
    'Déc'
  ],
  relative: {
    now: 'maintenant',
    past: 'il y a {value} {unit}',
    future: 'dans {value} {unit}',
    units: {
      singular: {
        second: 'seconde',
        minute: 'minute',
        hour: 'heure',
        day: 'jour',
        week: 'semaine',
        month: 'mois',
        year: 'année'
      },
      plural: {
        second: 'secondes',
        minute: 'minutes',
        hour: 'heures',
        day: 'jours',
        week: 'semaines',
        month: 'mois',
        year: 'années'
      }
    }
  },
  code: 'fr'
}
