import type * as Types from '@app/Types.ts'

/**
 * Japanese (ja) locale data.
 * @description Japanese locale for Daytime library.
 */
export const ja: Types.LocaleData = {
  dayNames: [
    '日曜日',
    '月曜日',
    '火曜日',
    '水曜日',
    '木曜日',
    '金曜日',
    '土曜日'
  ],
  dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
  monthNames: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月'
  ],
  monthNamesShort: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月'
  ],
  relative: {
    now: 'たった今',
    past: '{value} {unit}前',
    future: '{value} {unit}後',
    units: {
      singular: {
        second: '秒',
        minute: '分',
        hour: '時間',
        day: '日',
        week: '週間',
        month: 'ヶ月',
        year: '年'
      },
      plural: {
        second: '秒',
        minute: '分',
        hour: '時間',
        day: '日',
        week: '週間',
        month: 'ヶ月',
        year: '年'
      }
    }
  },
  code: 'ja'
}
