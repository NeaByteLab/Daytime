import type * as Types from '@app/Types.ts'

/**
 * Chinese (zh) locale data.
 * @description Chinese (Simplified) locale for Daytime library.
 */
export const zh: Types.LocaleData = {
  dayNames: [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六'
  ],
  dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
  monthNames: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月'
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
    now: '刚刚',
    past: '{value} {unit}前',
    future: '{value} {unit}后',
    units: {
      singular: {
        second: '秒',
        minute: '分钟',
        hour: '小时',
        day: '天',
        week: '周',
        month: '个月',
        year: '年'
      },
      plural: {
        second: '秒',
        minute: '分钟',
        hour: '小时',
        day: '天',
        week: '周',
        month: '个月',
        year: '年'
      }
    }
  },
  code: 'zh'
}
