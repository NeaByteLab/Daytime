import type * as Types from '@app/Types.ts'

/**
 * Romanian (ro) locale data.
 * @description Romanian locale for Daytime library.
 */
export const ro: Types.LocaleData = {
  dayNames: [
    'Duminică',
    'Luni',
    'Marți',
    'Miercuri',
    'Joi',
    'Vineri',
    'Sâmbătă'
  ],
  dayNamesShort: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
  monthNames: [
    'Ianuarie',
    'Februarie',
    'Martie',
    'Aprilie',
    'Mai',
    'Iunie',
    'Iulie',
    'August',
    'Septembrie',
    'Octombrie',
    'Noiembrie',
    'Decembrie'
  ],
  monthNamesShort: [
    'Ian',
    'Feb',
    'Mar',
    'Apr',
    'Mai',
    'Iun',
    'Iul',
    'Aug',
    'Sep',
    'Oct',
    'Noi',
    'Dec'
  ],
  relative: {
    now: 'acum',
    past: 'acum {value} {unit}',
    future: 'peste {value} {unit}',
    units: {
      singular: {
        second: 'secundă',
        minute: 'minut',
        hour: 'oră',
        day: 'zi',
        week: 'săptămână',
        month: 'lună',
        year: 'an'
      },
      plural: {
        second: 'secunde',
        minute: 'minute',
        hour: 'ore',
        day: 'zile',
        week: 'săptămâni',
        month: 'luni',
        year: 'ani'
      }
    }
  },
  code: 'ro'
}
