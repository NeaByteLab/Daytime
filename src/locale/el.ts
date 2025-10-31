import type * as Types from '@app/Types.ts'

/**
 * Greek (el) locale data.
 * @description Greek locale for Daytime library.
 */
export const el: Types.LocaleData = {
  dayNames: [
    'Κυριακή',
    'Δευτέρα',
    'Τρίτη',
    'Τετάρτη',
    'Πέμπτη',
    'Παρασκευή',
    'Σάββατο'
  ],
  dayNamesShort: ['Κυρ', 'Δευ', 'Τρί', 'Τετ', 'Πέμ', 'Παρ', 'Σάβ'],
  monthNames: [
    'Ιανουάριος',
    'Φεβρουάριος',
    'Μάρτιος',
    'Απρίλιος',
    'Μάιος',
    'Ιούνιος',
    'Ιούλιος',
    'Αύγουστος',
    'Σεπτέμβριος',
    'Οκτώβριος',
    'Νοέμβριος',
    'Δεκέμβριος'
  ],
  monthNamesShort: [
    'Ιαν',
    'Φεβ',
    'Μαρ',
    'Απρ',
    'Μαι',
    'Ιουν',
    'Ιουλ',
    'Αυγ',
    'Σεπ',
    'Οκτ',
    'Νοε',
    'Δεκ'
  ],
  relative: {
    now: 'τώρα',
    past: 'πριν από {value} {unit}',
    future: 'σε {value} {unit}',
    units: {
      singular: {
        second: 'δευτερόλεπτο',
        minute: 'λεπτό',
        hour: 'ώρα',
        day: 'ημέρα',
        week: 'εβδομάδα',
        month: 'μήνας',
        year: 'έτος'
      },
      plural: {
        second: 'δευτερόλεπτα',
        minute: 'λεπτά',
        hour: 'ώρες',
        day: 'ημέρες',
        week: 'εβδομάδες',
        month: 'μήνες',
        year: 'χρόνια'
      }
    }
  },
  code: 'el'
}
