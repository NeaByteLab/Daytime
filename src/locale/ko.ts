import type * as Types from '@app/Types.ts'

/**
 * Korean (ko) locale data.
 * @description Korean locale for Daytime library.
 */
export const ko: Types.LocaleData = {
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일'
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월'
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월'
  ],
  relative: {
    now: '방금',
    past: '{value} {unit} 전',
    future: '{value} {unit} 후',
    units: {
      singular: {
        second: '초',
        minute: '분',
        hour: '시간',
        day: '일',
        week: '주',
        month: '개월',
        year: '년'
      },
      plural: {
        second: '초',
        minute: '분',
        hour: '시간',
        day: '일',
        week: '주',
        month: '개월',
        year: '년'
      }
    }
  },
  code: 'ko'
}
