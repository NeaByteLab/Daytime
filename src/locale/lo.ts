import type * as Types from '@app/Types.ts'

/**
 * Lao (lo) locale data.
 * @description Lao locale for Daytime library.
 */
export const lo: Types.LocaleData = {
  dayNames: ['ວັນອາທິດ', 'ວັນຈັນ', 'ວັນອັງຄານ', 'ວັນພຸດ', 'ວັນພະຫັດ', 'ວັນສຸກ', 'ວັນເສົາ'],
  dayNamesShort: ['ອາ.', 'ຈ.', 'ອັງ.', 'ພຸ.', 'ພະຫັດ', 'ສຸກ', 'ເສົາ'],
  monthNames: [
    'ມັງກອນ',
    'ກຸມພາ',
    'ມີນາ',
    'ເມສາ',
    'ພຶດສະພາ',
    'ມິຖຸນາ',
    'ກໍລະກົດ',
    'ສິງຫາ',
    'ກັນຍາ',
    'ຕຸລາ',
    'ພະຈິກ',
    'ທັນວາ'
  ],
  monthNamesShort: [
    'ມ.ກ.',
    'ກ.ພ.',
    'ມ.ນ.',
    'ເມ.ສ.',
    'ພ.ພ.',
    'ມິ.ຖ.',
    'ກ.ລ.',
    'ສ.ຫ.',
    'ກ.ຍ.',
    'ຕ.ລ.',
    'ພ.ຈ.',
    'ທ.ວ.'
  ],
  relative: {
    now: 'ດຽວນີ້',
    past: '{value} {unit} ຜ່ານມາ',
    future: 'ໃນ {value} {unit}',
    units: {
      singular: {
        second: 'ວິນາທີ',
        minute: 'ນາທີ',
        hour: 'ຊົ່ວໂມງ',
        day: 'ມື້',
        week: 'ອາທິດ',
        month: 'ເດືອນ',
        year: 'ປີ'
      },
      plural: {
        second: 'ວິນາທີ',
        minute: 'ນາທີ',
        hour: 'ຊົ່ວໂມງ',
        day: 'ມື້',
        week: 'ອາທິດ',
        month: 'ເດືອນ',
        year: 'ປີ'
      }
    }
  },
  code: 'lo'
}
