import type * as Types from '@app/Types.ts'

/**
 * Thai (th) locale data.
 * @description Thai locale for Daytime library.
 */
export const th: Types.LocaleData = {
  dayNames: [
    'วันอาทิตย์',
    'วันจันทร์',
    'วันอังคาร',
    'วันพุธ',
    'วันพฤหัสบดี',
    'วันศุกร์',
    'วันเสาร์'
  ],
  dayNamesShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
  monthNames: [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม'
  ],
  monthNamesShort: [
    'ม.ค.',
    'ก.พ.',
    'มี.ค.',
    'เม.ย.',
    'พ.ค.',
    'มิ.ย.',
    'ก.ค.',
    'ส.ค.',
    'ก.ย.',
    'ต.ค.',
    'พ.ย.',
    'ธ.ค.'
  ],
  relative: {
    now: 'เมื่อสักครู่',
    past: '{value} {unit} ที่แล้ว',
    future: 'อีก {value} {unit}',
    units: {
      singular: {
        second: 'วินาที',
        minute: 'นาที',
        hour: 'ชั่วโมง',
        day: 'วัน',
        week: 'สัปดาห์',
        month: 'เดือน',
        year: 'ปี'
      },
      plural: {
        second: 'วินาที',
        minute: 'นาที',
        hour: 'ชั่วโมง',
        day: 'วัน',
        week: 'สัปดาห์',
        month: 'เดือน',
        year: 'ปี'
      }
    }
  },
  code: 'th'
}
