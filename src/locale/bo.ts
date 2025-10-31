import type * as Types from '@app/Types.ts'

/**
 * Tibetan (bo) locale data.
 * @description Tibetan locale for Daytime library.
 */
export const bo: Types.LocaleData = {
  dayNames: [
    'གཟའ་ཉི་མ།',
    'གཟའ་ཟླ་བ།',
    'གཟའ་མིག་དམར།',
    'གཟའ་ལྷག་པ།',
    'གཟའ་ཕུར་བུ།',
    'གཟའ་པ་སངས།',
    'གཟའ་སྤེན་པ།'
  ],
  dayNamesShort: ['ཉི་མ', 'ཟླ་བ', 'མིག་དམར', 'ལྷག་པ', 'ཕུར་བུ', 'པ་སངས', 'སྤེན་པ'],
  monthNames: [
    'ཟླ་བ་དང་པོ',
    'ཟླ་བ་གཉིས་པ',
    'ཟླ་བ་གསུམ་པ',
    'ཟླ་བ་བཞི་པ',
    'ཟླ་བ་ལྔ་པ',
    'ཟླ་བ་དྲུག་པ',
    'ཟླ་བ་བདུན་པ',
    'ཟླ་བ་བརྒྱད་པ',
    'ཟླ་བ་དགུ་པ',
    'ཟླ་བ་བཅུ་པ',
    'ཟླ་བ་བཅུ་གཅིག་པ',
    'ཟླ་བ་བཅུ་གཉིས་པ'
  ],
  monthNamesShort: [
    'ཟླ་༡',
    'ཟླ་༢',
    'ཟླ་༣',
    'ཟླ་༤',
    'ཟླ་༥',
    'ཟླ་༦',
    'ཟླ་༧',
    'ཟླ་༨',
    'ཟླ་༩',
    'ཟླ་༡༠',
    'ཟླ་༡༡',
    'ཟླ་༡༢'
  ],
  relative: {
    now: 'ད་ལྟ',
    past: '{value} {unit} སྔོན་ལ',
    future: '{value} {unit} རྗེས་ལ',
    units: {
      singular: {
        second: 'སྐར་ཆ།',
        minute: 'སྐར་མ།',
        hour: 'ཆུ་ཚོད།',
        day: 'ཉིན།',
        week: 'བདུན་ཕྲག།',
        month: 'ཟླ་བ།',
        year: 'ལོ།'
      },
      plural: {
        second: 'སྐར་ཆ།',
        minute: 'སྐར་མ།',
        hour: 'ཆུ་ཚོད།',
        day: 'ཉིན།',
        week: 'བདུན་ཕྲག།',
        month: 'ཟླ་བ།',
        year: 'ལོ།'
      }
    }
  },
  code: 'bo'
}
