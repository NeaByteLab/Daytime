import type * as Types from '@app/Types.ts'

/**
 * Czech (cs) locale data.
 * @description Czech locale for Daytime library.
 */
export const cs: Types.LocaleData = {
  dayNames: [
    'Neděle',
    'Pondělí',
    'Úterý',
    'Středa',
    'Čtvrtek',
    'Pátek',
    'Sobota'
  ],
  dayNamesShort: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
  monthNames: [
    'Leden',
    'Únor',
    'Březen',
    'Duben',
    'Květen',
    'Červen',
    'Červenec',
    'Srpen',
    'Září',
    'Říjen',
    'Listopad',
    'Prosinec'
  ],
  monthNamesShort: [
    'Led',
    'Úno',
    'Bře',
    'Dub',
    'Kvě',
    'Čvn',
    'Čvc',
    'Srp',
    'Zář',
    'Říj',
    'Lis',
    'Pro'
  ],
  relative: {
    now: 'právě teď',
    past: 'před {value} {unit}',
    future: 'za {value} {unit}',
    units: {
      singular: {
        second: 'sekundu',
        minute: 'minutu',
        hour: 'hodinu',
        day: 'den',
        week: 'týden',
        month: 'měsíc',
        year: 'rok'
      },
      plural: {
        second: 'sekund',
        minute: 'minut',
        hour: 'hodin',
        day: 'dnů',
        week: 'týdnů',
        month: 'měsíců',
        year: 'let'
      }
    }
  },
  code: 'cs'
}
