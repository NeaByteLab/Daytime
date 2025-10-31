import type * as Types from '@app/Types.ts'

/**
 * Vietnamese (vi) locale data.
 * @description Vietnamese locale for Daytime library.
 */
export const vi: Types.LocaleData = {
  dayNames: [
    'Chủ Nhật',
    'Thứ Hai',
    'Thứ Ba',
    'Thứ Tư',
    'Thứ Năm',
    'Thứ Sáu',
    'Thứ Bảy'
  ],
  dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  monthNames: [
    'Tháng Một',
    'Tháng Hai',
    'Tháng Ba',
    'Tháng Tư',
    'Tháng Năm',
    'Tháng Sáu',
    'Tháng Bảy',
    'Tháng Tám',
    'Tháng Chín',
    'Tháng Mười',
    'Tháng Mười Một',
    'Tháng Mười Hai'
  ],
  monthNamesShort: [
    'Th1',
    'Th2',
    'Th3',
    'Th4',
    'Th5',
    'Th6',
    'Th7',
    'Th8',
    'Th9',
    'Th10',
    'Th11',
    'Th12'
  ],
  relative: {
    now: 'vừa xong',
    past: 'cách đây {value} {unit}',
    future: 'trong {value} {unit} nữa',
    units: {
      singular: {
        second: 'giây',
        minute: 'phút',
        hour: 'giờ',
        day: 'ngày',
        week: 'tuần',
        month: 'tháng',
        year: 'năm'
      },
      plural: {
        second: 'giây',
        minute: 'phút',
        hour: 'giờ',
        day: 'ngày',
        week: 'tuần',
        month: 'tháng',
        year: 'năm'
      }
    }
  },
  code: 'vi'
}
