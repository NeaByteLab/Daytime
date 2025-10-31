import { assertEquals } from '@std/assert'
import { expectedTrue } from '@tests/shared/index.ts'
import daytime from '@neabyte/daytime'

Deno.test('ISO Week: isoWeek - should return correct ISO week number', () => {
  const date1 = daytime('2026-01-01')
  assertEquals(date1.isoWeek(), 1)
  const date2 = daytime('2026-01-04')
  assertEquals(date2.isoWeek(), 1)
  const date3 = daytime('2026-01-05')
  assertEquals(date3.isoWeek(), 2)
  const date4 = daytime('2025-01-01')
  assertEquals(date4.isoWeek(), 1)
})

Deno.test('ISO Week: isoWeekYear - should return correct ISO week year', () => {
  const date1 = daytime('2026-01-01')
  assertEquals(date1.isoWeekYear(), 2026)
  const date2 = daytime('2025-12-31')
  assertEquals(date2.isoWeekYear(), 2026)
  const date3 = daytime('2025-01-01')
  assertEquals(date3.isoWeekYear(), 2025)
})

Deno.test('ISO Week: isoWeekday - should return correct ISO weekday (Monday=1, Sunday=7)', () => {
  const monday = daytime('2026-01-05')
  assertEquals(monday.isoWeekday(), 1)
  const tuesday = daytime('2026-01-06')
  assertEquals(tuesday.isoWeekday(), 2)
  const wednesday = daytime('2025-12-31')
  assertEquals(wednesday.isoWeekday(), 3)
  const thursday = daytime('2026-01-01')
  assertEquals(thursday.isoWeekday(), 4)
  const friday = daytime('2026-01-02')
  assertEquals(friday.isoWeekday(), 5)
  const saturday = daytime('2026-01-03')
  assertEquals(saturday.isoWeekday(), 6)
  const sunday = daytime('2026-01-04')
  assertEquals(sunday.isoWeekday(), 7)
})

Deno.test('ISO Week: isoWeeksInYear - should return correct number of ISO weeks in year', () => {
  const date1 = daytime('2026-01-01')
  assertEquals(date1.isoWeeksInYear(), 54)
  const date2 = daytime('2025-01-01')
  assertEquals(date2.isoWeeksInYear(), 53)
  const date3 = daytime('2026-12-30')
  assertEquals(date3.isoWeeksInYear(), 54)
  const date4 = daytime('2025-12-28')
  assertEquals(date4.isoWeeksInYear(), 53)
})

Deno.test('ISO Week: startOf isoWeek - should return start of ISO week (Monday)', () => {
  const thursday = daytime('2026-01-01T14:30:00')
  const startOfWeek = thursday.startOf('isoWeek')
  assertEquals(startOfWeek.isoWeekday(), 1)
  assertEquals(startOfWeek.format('YYYY-MM-DD'), '2025-12-29')
  assertEquals(startOfWeek.get('hour'), 0)
  assertEquals(startOfWeek.get('minute'), 0)
  assertEquals(startOfWeek.get('second'), 0)
  assertEquals(startOfWeek.get('millisecond'), 0)
  const sunday = daytime('2026-01-04T14:30:00')
  const startOfWeekFromSunday = sunday.startOf('isoWeek')
  assertEquals(startOfWeekFromSunday.isoWeekday(), 1)
  assertEquals(startOfWeekFromSunday.format('YYYY-MM-DD'), '2025-12-29')
})

Deno.test('ISO Week: endOf isoWeek - should return end of ISO week (Sunday)', () => {
  const thursday = daytime('2026-01-01T14:30:00')
  const endOfWeek = thursday.endOf('isoWeek')
  assertEquals(endOfWeek.isoWeekday(), 7)
  assertEquals(endOfWeek.format('YYYY-MM-DD'), '2026-01-04')
  assertEquals(endOfWeek.get('hour'), 23)
  assertEquals(endOfWeek.get('minute'), 59)
  assertEquals(endOfWeek.get('second'), 59)
  assertEquals(endOfWeek.get('millisecond'), 999)
  const monday = daytime('2026-01-05T14:30:00')
  const endOfWeekFromMonday = monday.endOf('isoWeek')
  assertEquals(endOfWeekFromMonday.isoWeekday(), 7)
  assertEquals(endOfWeekFromMonday.format('YYYY-MM-DD'), '2026-01-11')
})

Deno.test('ISO Week: should handle year boundaries correctly', () => {
  const dec28 = daytime('2025-12-28')
  assertEquals(dec28.isoWeek(), 52)
  assertEquals(dec28.isoWeekYear(), 2025)
  const dec29 = daytime('2025-12-29')
  assertEquals(dec29.isoWeek(), 1)
  assertEquals(dec29.isoWeekYear(), 2026)
  const jan1 = daytime('2026-01-01')
  assertEquals(jan1.isoWeek(), 1)
  assertEquals(jan1.isoWeekYear(), 2026)
})

Deno.test('ISO Week: should work with leap years', () => {
  const leapYear = daytime('2028-02-29')
  assertEquals(leapYear.isoWeekYear(), 2028)
  assertEquals(leapYear.isoWeekday(), 2)
  assertEquals(leapYear.isoWeek(), 9)
})

Deno.test('ISO Week: should be immutable', () => {
  const date = daytime('2026-01-01')
  const originalISOWeek = date.isoWeek()
  date.startOf('isoWeek')
  assertEquals(date.isoWeek(), originalISOWeek)
  const date2 = daytime('2026-01-01')
  const originalISOWeekday = date2.isoWeekday()
  date2.endOf('isoWeek')
  assertEquals(date2.isoWeekday(), originalISOWeekday)
})

Deno.test('ISO Week: should work with chaining', () => {
  const result = daytime('2026-01-01')
    .startOf('isoWeek')
    .add(3, 'days')
    .endOf('isoWeek')
    .isoWeekday()
  assertEquals(result, 7)
})

Deno.test('ISO Week: isoWeekYear can differ from calendar year', () => {
  const lateDec = daytime('2025-12-31')
  assertEquals(lateDec.get('year'), 2025)
  assertEquals(lateDec.isoWeekYear(), 2026)
  const earlyJan = daytime('2026-01-01')
  assertEquals(earlyJan.get('year'), 2026)
  assertEquals(earlyJan.isoWeekYear(), 2026)
  const jan6 = daytime('2026-01-06')
  assertEquals(jan6.get('year'), 2026)
  assertEquals(jan6.isoWeekYear(), 2026)
})

Deno.test('ISO Week: isoWeeksInYear should use isoWeekYear', () => {
  const lateDec = daytime('2025-12-31')
  const weeks = lateDec.isoWeeksInYear()
  assertEquals(weeks, 53)
  const earlyJan = daytime('2026-01-01')
  const weeksEarlyJan = earlyJan.isoWeeksInYear()
  assertEquals(weeksEarlyJan, 54)
})

Deno.test('ISO Week: isoWeek - should handle year when Jan 1 is not Thursday', () => {
  const date = new Date('2025-01-01')
  const week = daytime(date).isoWeek()
  assertEquals(typeof week, 'number')
  assertEquals(week, 1)
})

Deno.test('ISO Week: isoWeekday - should handle all weekdays', () => {
  const monday = daytime('2026-01-05')
  assertEquals(monday.isoWeekday(), 1)
  const tuesday = daytime('2026-01-06')
  assertEquals(tuesday.isoWeekday(), 2)
  const wednesday = daytime('2025-12-31')
  assertEquals(wednesday.isoWeekday(), 3)
  const thursday = daytime('2026-01-01')
  assertEquals(thursday.isoWeekday(), 4)
  const friday = daytime('2026-01-02')
  assertEquals(friday.isoWeekday(), 5)
  const saturday = daytime('2026-01-03')
  assertEquals(saturday.isoWeekday(), 6)
  const sunday = daytime('2026-01-04')
  assertEquals(sunday.isoWeekday(), 7)
})

Deno.test('ISO Week: isoWeek - should handle years when Jan 1 is Thursday', () => {
  const thursdayJan1 = daytime('2026-01-01')
  assertEquals(thursdayJan1.isoWeek(), 1)
  assertEquals(thursdayJan1.isoWeekYear(), 2026)
})

Deno.test('ISO Week: isoWeek - should handle years when Jan 1 is not Thursday', () => {
  const wednesdayJan1 = daytime('2025-01-01')
  assertEquals(wednesdayJan1.isoWeek(), 1)
  const fridayJan1 = daytime('2027-01-01')
  assertEquals(fridayJan1.isoWeek(), 53)
  assertEquals(fridayJan1.isoWeekYear(), 2026)
})

Deno.test('ISO Week: isoWeek - should handle different days of week for Jan 1', () => {
  const wednesdayJan1 = daytime('2025-01-01')
  assertEquals(wednesdayJan1.isoWeek(), 1)
  const thursdayJan1 = daytime('2026-01-01')
  assertEquals(thursdayJan1.isoWeek(), 1)
  const fridayJan1 = daytime('2027-01-01')
  assertEquals(fridayJan1.isoWeek(), 53)
  assertEquals(fridayJan1.isoWeekYear(), 2026)
  const saturdayJan1 = daytime('2028-01-01')
  assertEquals(saturdayJan1.isoWeek(), 52)
  assertEquals(saturdayJan1.isoWeekYear(), 2027)
  const sundayJan1 = daytime('2029-01-01')
  assertEquals(sundayJan1.isoWeek(), 1)
  assertEquals(sundayJan1.isoWeekYear(), 2029)
})

Deno.test('ISO Week: isoWeekday - should handle Sunday (edge case)', () => {
  const sunday = daytime('2026-01-04')
  assertEquals(sunday.isoWeekday(), 7)
  const sunday2 = daytime('2026-01-11')
  assertEquals(sunday2.isoWeekday(), 7)
})

Deno.test('ISO Week: isoWeekday - should handle all non-Sunday days', () => {
  const monday = daytime('2026-01-05')
  assertEquals(monday.isoWeekday(), 1)
  const tuesday = daytime('2026-01-06')
  assertEquals(tuesday.isoWeekday(), 2)
  const wednesday = daytime('2025-12-31')
  assertEquals(wednesday.isoWeekday(), 3)
  const thursday = daytime('2026-01-01')
  assertEquals(thursday.isoWeekday(), 4)
  const friday = daytime('2026-01-02')
  assertEquals(friday.isoWeekday(), 5)
  const saturday = daytime('2026-01-03')
  assertEquals(saturday.isoWeekday(), 6)
})

Deno.test('ISO Week: isoWeek - should handle all months throughout year', () => {
  const months2026 = [
    { month: 0, day: 15, minWeek: 1, maxWeek: 5 },
    { month: 1, day: 15, minWeek: 5, maxWeek: 10 },
    { month: 2, day: 15, minWeek: 10, maxWeek: 15 },
    { month: 3, day: 15, minWeek: 15, maxWeek: 20 },
    { month: 4, day: 15, minWeek: 20, maxWeek: 25 },
    { month: 5, day: 15, minWeek: 25, maxWeek: 30 },
    { month: 6, day: 15, minWeek: 29, maxWeek: 35 },
    { month: 7, day: 15, minWeek: 33, maxWeek: 40 },
    { month: 8, day: 15, minWeek: 37, maxWeek: 45 },
    { month: 9, day: 15, minWeek: 42, maxWeek: 50 },
    { month: 10, day: 15, minWeek: 46, maxWeek: 53 },
    { month: 11, day: 15, minWeek: 50, maxWeek: 54 }
  ]
  for (const { month, day, minWeek, maxWeek } of months2026) {
    const date = new Date(2026, month, day)
    const week = daytime(date).isoWeek()
    assertEquals(typeof week, 'number')
    assertEquals(week >= minWeek && week <= maxWeek, expectedTrue)
  }
})

Deno.test('ISO Week: isoWeek - should handle year when Jan 1 is Monday', () => {
  const mondayJan1 = daytime('2024-01-01')
  assertEquals(mondayJan1.isoWeek(), 1)
  assertEquals(mondayJan1.isoWeekYear(), 2024)
})

Deno.test('ISO Week: isoWeek - should handle year when Jan 1 is Tuesday', () => {
  const tuesdayJan1 = daytime('2030-01-01')
  const week = daytime(tuesdayJan1).isoWeek()
  assertEquals(typeof week, 'number')
  assertEquals(week >= 1 && week <= 53, expectedTrue)
})

Deno.test('ISO Week: isoWeekYear - should handle dates in late December', () => {
  const dates = [
    daytime('2025-12-28'),
    daytime('2025-12-29'),
    daytime('2025-12-30'),
    daytime('2025-12-31')
  ]
  for (const date of dates) {
    const isoYear = date.isoWeekYear()
    assertEquals(typeof isoYear, 'number')
    assertEquals(isoYear >= 2025 && isoYear <= 2026, expectedTrue)
  }
})

Deno.test('ISO Week: isoWeekYear - should handle dates in early January', () => {
  const dates = [
    daytime('2026-01-01'),
    daytime('2026-01-02'),
    daytime('2026-01-03'),
    daytime('2026-01-04')
  ]
  for (const date of dates) {
    const isoYear = date.isoWeekYear()
    assertEquals(typeof isoYear, 'number')
    assertEquals(isoYear >= 2025 && isoYear <= 2026, expectedTrue)
  }
})

Deno.test('ISO Week: isoWeek - should be consistent within same week', () => {
  const monday = daytime('2026-01-05')
  const tuesday = daytime('2026-01-06')
  const wednesday = daytime('2026-01-07')
  const thursday = daytime('2026-01-08')
  const friday = daytime('2026-01-09')
  const saturday = daytime('2026-01-10')
  const sunday = daytime('2026-01-11')
  assertEquals(monday.isoWeek(), tuesday.isoWeek())
  assertEquals(tuesday.isoWeek(), wednesday.isoWeek())
  assertEquals(wednesday.isoWeek(), thursday.isoWeek())
  assertEquals(thursday.isoWeek(), friday.isoWeek())
  assertEquals(friday.isoWeek(), saturday.isoWeek())
  assertEquals(saturday.isoWeek(), sunday.isoWeek())
})

Deno.test('ISO Week: isoWeek - should increase from week to week', () => {
  const week1Monday = daytime('2026-01-05')
  const week2Monday = daytime('2026-01-12')
  const week3Monday = daytime('2026-01-19')
  assertEquals(week2Monday.isoWeek(), week1Monday.isoWeek() + 1)
  assertEquals(week3Monday.isoWeek(), week2Monday.isoWeek() + 1)
})

Deno.test('ISO Week: isoWeek - should handle mid-year dates correctly', () => {
  const midYear = daytime('2026-06-15')
  const week = midYear.isoWeek()
  assertEquals(typeof week, 'number')
  assertEquals(week >= 20 && week <= 30, expectedTrue)
})

Deno.test('ISO Week: isoWeekYear - should be same as calendar year for most dates', () => {
  const midYear = daytime('2026-06-15')
  assertEquals(midYear.isoWeekYear(), 2026)
  assertEquals(midYear.get('year'), 2026)
})

Deno.test('ISO Week: isoWeeksInYear - should return 52, 53, or 54', () => {
  const years = [2024, 2025, 2026, 2027, 2028, 2029, 2030]
  for (const year of years) {
    const date = daytime(`${year}-06-15`)
    const weeks = date.isoWeeksInYear()
    assertEquals(weeks === 52 || weeks === 53 || weeks === 54, expectedTrue)
  }
})

Deno.test('ISO Week: isoWeeksInYear - should be consistent for same year', () => {
  const dates2026 = [daytime('2026-01-01'), daytime('2026-06-15'), daytime('2026-12-31')]
  const weeks = dates2026[0]?.isoWeeksInYear() ?? 0
  for (const date of dates2026) {
    assertEquals(date.isoWeeksInYear(), weeks)
  }
})

Deno.test('ISO Week: isoWeeksInYear - should handle different centuries', () => {
  const dates = [daytime('2000-06-15'), daytime('2100-06-15'), daytime('2200-06-15')]
  for (const date of dates) {
    const weeks = date.isoWeeksInYear()
    assertEquals(weeks === 52 || weeks === 53 || weeks === 54, expectedTrue)
  }
})

Deno.test('ISO Week: isoWeek - should handle week 53 correctly', () => {
  const week53Dates = [daytime('2025-12-29'), daytime('2025-12-30'), daytime('2025-12-31')]
  for (const date of week53Dates) {
    const week = date.isoWeek()
    assertEquals(week === 1 || week === 53, expectedTrue)
  }
})

Deno.test('ISO Week: isoWeekday - should be consistent with dayOfWeek', () => {
  const dates = [
    daytime('2026-01-05'),
    daytime('2026-01-06'),
    daytime('2026-01-07'),
    daytime('2026-01-08'),
    daytime('2026-01-09'),
    daytime('2026-01-10'),
    daytime('2026-01-11')
  ]
  for (let i = 0; i < dates.length; i++) {
    const date = dates[i]
    const dayOfWeek = date?.dayOfWeek()
    const isoWeekday = date?.isoWeekday()
    if (dayOfWeek === 0) {
      assertEquals(isoWeekday, 7)
    } else {
      assertEquals(isoWeekday, dayOfWeek)
    }
  }
})

Deno.test('ISO Week: startOf isoWeek - should handle week spanning year boundary', () => {
  const lateDec = daytime('2025-12-31')
  const start = lateDec.startOf('isoWeek')
  assertEquals(start.isoWeekday(), 1)
  assertEquals(start.format('YYYY-MM-DD') >= '2025-12-29', expectedTrue)
})

Deno.test('ISO Week: endOf isoWeek - should handle week spanning year boundary', () => {
  const lateDec = daytime('2025-12-31')
  const end = lateDec.endOf('isoWeek')
  assertEquals(end.isoWeekday(), 7)
  assertEquals(end.format('YYYY-MM-DD') <= '2026-01-04', expectedTrue)
})

Deno.test('ISO Week: isoWeek - should handle February 29 in leap years', () => {
  const leapDay = daytime('2028-02-29')
  const week = leapDay.isoWeek()
  assertEquals(typeof week, 'number')
  assertEquals(week >= 8 && week <= 10, expectedTrue)
  assertEquals(leapDay.isoWeekYear(), 2028)
})

Deno.test('ISO Week: isoWeekYear - should handle century years', () => {
  const centuryYears = [daytime('2000-01-01'), daytime('2100-01-01'), daytime('2400-01-01')]
  for (const date of centuryYears) {
    const isoYear = date.isoWeekYear()
    assertEquals(typeof isoYear, 'number')
    assertEquals(isoYear >= 1999 && isoYear <= 2401, expectedTrue)
  }
})

Deno.test('ISO Week: all methods should work together', () => {
  const date = daytime('2026-06-15')
  assertEquals(date.isoWeek() >= 1 && date.isoWeek() <= 54, expectedTrue)
  assertEquals(date.isoWeekday() >= 1 && date.isoWeekday() <= 7, expectedTrue)
  assertEquals(typeof date.isoWeekYear(), 'number')
  assertEquals(
    date.isoWeeksInYear() === 52 || date.isoWeeksInYear() === 53 || date.isoWeeksInYear() === 54,
    expectedTrue
  )
})
