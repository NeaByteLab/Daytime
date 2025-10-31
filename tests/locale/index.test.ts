import { expect } from '@std/expect'
import { expectedTrue } from '@tests/shared/index.ts'
import type * as Types from '@app/Types.ts'
import * as Locale from '@locale/index.ts'
import { en } from '@locale/en.ts'

Deno.test('Locale: getAvailableLocales - should return array of locale codes', () => {
  const locales = Locale.getAvailableLocales()
  expect(Array.isArray(locales)).toBe(expectedTrue)
  expect(locales.length).toBeGreaterThan(0)
  expect(locales.includes('en')).toBe(expectedTrue)
  expect(locales.includes('id')).toBe(expectedTrue)
})

Deno.test('Locale: getDefaultLocale - should return default locale code', () => {
  const defaultLocale = Locale.getDefaultLocale()
  expect(typeof defaultLocale).toEqual('string')
  expect(defaultLocale).toEqual('en')
})

Deno.test('Locale: getLocale - should return locale data for valid code', () => {
  const locale = Locale.getLocale('en')
  expect(locale).toBeDefined()
  expect(locale.code).toEqual('en')
  expect(Array.isArray(locale.dayNames)).toBe(expectedTrue)
  expect(Array.isArray(locale.monthNames)).toBe(expectedTrue)
  expect(locale.relative).toBeDefined()
})

Deno.test('Locale: getLocale - should return default locale when code is undefined', () => {
  const locale = Locale.getLocale()
  expect(locale).toBeDefined()
  expect(locale.code).toEqual('en')
})

Deno.test('Locale: getLocale - should return default locale when code is empty string', () => {
  const locale = Locale.getLocale('')
  expect(locale).toBeDefined()
  expect(locale.code).toEqual('en')
})

Deno.test('Locale: getLocale - should normalize locale code with region', () => {
  const locale = Locale.getLocale('en-US')
  expect(locale).toBeDefined()
  expect(locale.code).toEqual('en')
})

Deno.test('Locale: getLocale - should normalize locale code to lowercase', () => {
  const locale = Locale.getLocale('EN')
  expect(locale).toBeDefined()
  expect(locale.code).toEqual('en')
})

Deno.test('Locale: getLocale - should fallback to default for invalid code', () => {
  const locale = Locale.getLocale('invalid-locale-code')
  expect(locale).toBeDefined()
  expect(locale.code).toEqual('en')
})

Deno.test('Locale: getLocale - should return locale data for Indonesian', () => {
  const locale = Locale.getLocale('id')
  expect(locale).toBeDefined()
  expect(locale.code).toEqual('id')
  expect(locale.dayNames[0]).toEqual('Minggu')
})

Deno.test('Locale: getLocale - should return locale data for Spanish', () => {
  const locale = Locale.getLocale('es')
  expect(locale).toBeDefined()
  expect(locale.code).toEqual('es')
})

Deno.test('Locale: normalizeLocaleCode - should normalize valid locale code', () => {
  expect(Locale.normalizeLocaleCode('en')).toEqual('en')
  expect(Locale.normalizeLocaleCode('id')).toEqual('id')
  expect(Locale.normalizeLocaleCode('es')).toEqual('es')
})

Deno.test('Locale: normalizeLocaleCode - should normalize locale with region', () => {
  expect(Locale.normalizeLocaleCode('en-US')).toEqual('en')
  expect(Locale.normalizeLocaleCode('id-ID')).toEqual('id')
  expect(Locale.normalizeLocaleCode('es-ES')).toEqual('es')
})

Deno.test('Locale: normalizeLocaleCode - should convert to lowercase', () => {
  expect(Locale.normalizeLocaleCode('EN')).toEqual('en')
  expect(Locale.normalizeLocaleCode('ID')).toEqual('id')
  expect(Locale.normalizeLocaleCode('ES')).toEqual('es')
})

Deno.test('Locale: normalizeLocaleCode - should return default for empty string', () => {
  expect(Locale.normalizeLocaleCode('')).toEqual('en')
})

Deno.test('Locale: normalizeLocaleCode - should return default for whitespace only', () => {
  expect(Locale.normalizeLocaleCode('   ')).toEqual('en')
})

Deno.test('Locale: normalizeLocaleCode - should return default for invalid code', () => {
  expect(Locale.normalizeLocaleCode('invalid-code')).toEqual('en')
  expect(Locale.normalizeLocaleCode('xyz')).toEqual('en')
})

Deno.test('Locale: normalizeLocaleCode - should handle null-like values', () => {
  expect(Locale.normalizeLocaleCode(null as unknown as string)).toEqual('en')
  expect(Locale.normalizeLocaleCode(undefined as unknown as string)).toEqual('en')
})

Deno.test('Locale: registerLocale - should register custom locale', () => {
  const customLocale: Types.LocaleData = {
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    monthNames: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    monthNamesShort: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    relative: {
      now: 'now',
      past: '{value} {unit} ago',
      future: 'in {value} {unit}',
      units: {
        singular: {
          second: 'sec',
          minute: 'min',
          hour: 'hr',
          day: 'day',
          week: 'wk',
          month: 'mo',
          year: 'yr'
        },
        plural: {
          second: 'secs',
          minute: 'mins',
          hour: 'hrs',
          day: 'days',
          week: 'wks',
          month: 'mos',
          year: 'yrs'
        }
      }
    },
    code: 'test'
  }
  Locale.registerLocale('test', customLocale)
  const registered = Locale.getLocale('test')
  expect(registered).toBeDefined()
  expect(registered.code).toEqual('test')
  expect(registered.dayNames[0]).toEqual('Sun')
})

Deno.test('Locale: registerLocale - should normalize locale code before registering', () => {
  const customLocale: Types.LocaleData = {
    ...en,
    code: 'custom'
  }
  Locale.registerLocale('CUSTOM-LOCALE', customLocale)
  const registered = Locale.getLocale('custom')
  expect(registered).toBeDefined()
  expect(registered.code).toEqual('custom')
})

Deno.test('Locale: setDefaultLocale - should set default locale to valid code', () => {
  const originalDefault = Locale.getDefaultLocale()
  try {
    Locale.setDefaultLocale('id')
    expect(Locale.getDefaultLocale()).toEqual('id')
    expect(Locale.getLocale().code).toEqual('id')
  } finally {
    Locale.setDefaultLocale(originalDefault)
    expect(Locale.getDefaultLocale()).toEqual('en')
  }
})

Deno.test('Locale: setDefaultLocale - should normalize locale code', () => {
  const originalDefault = Locale.getDefaultLocale()
  try {
    Locale.setDefaultLocale('ID')
    expect(Locale.getDefaultLocale()).toEqual('id')
    Locale.setDefaultLocale('en-US')
    expect(Locale.getDefaultLocale()).toEqual('en')
  } finally {
    Locale.setDefaultLocale(originalDefault)
  }
})

Deno.test('Locale: setDefaultLocale - should accept normalized locale codes', () => {
  const originalDefault = Locale.getDefaultLocale()
  try {
    Locale.setDefaultLocale('invalid-locale-code')
    expect(Locale.getDefaultLocale()).toEqual('en')
  } finally {
    Locale.setDefaultLocale(originalDefault)
  }
})

Deno.test('Locale: setDefaultLocale - should work with normalized codes', () => {
  const originalDefault = Locale.getDefaultLocale()
  try {
    const beforeNormalize = Locale.normalizeLocaleCode('xyz')
    expect(beforeNormalize).toEqual('en')
    Locale.setDefaultLocale('xyz')
    expect(Locale.getDefaultLocale()).toEqual('en')
  } finally {
    Locale.setDefaultLocale(originalDefault)
  }
})

Deno.test('Locale: getLocale - should return registered locale', () => {
  const originalDefault = Locale.getDefaultLocale()
  try {
    const testLocale: Types.LocaleData = {
      ...en,
      code: 'test-default'
    }
    Locale.registerLocale('test-default', testLocale)
    Locale.setDefaultLocale('test-default')
    const locale = Locale.getLocale('test-default')
    expect(locale).toBeDefined()
    expect(locale.code).toEqual('test-default')
  } finally {
    Locale.setDefaultLocale(originalDefault)
  }
})

Deno.test('Locale: getLocale - should handle various locale codes', () => {
  const testCases = ['en', 'id', 'es', 'fr', 'de', 'ja', 'zh', 'ar', 'hi', 'ru']
  for (const code of testCases) {
    const locale = Locale.getLocale(code)
    expect(locale).toBeDefined()
    expect(typeof locale.code).toEqual('string')
    expect(locale.dayNames.length).toEqual(7)
    expect(locale.monthNames.length).toEqual(12)
  }
})

Deno.test('Locale: normalizeLocaleCode - should handle mixed case with region', () => {
  expect(Locale.normalizeLocaleCode('EN-us')).toEqual('en')
  expect(Locale.normalizeLocaleCode('Id-ID')).toEqual('id')
  expect(Locale.normalizeLocaleCode('eS-ES')).toEqual('es')
})

Deno.test('Locale: getAvailableLocales - should include all major locales', () => {
  const locales = Locale.getAvailableLocales()
  const majorLocales = ['en', 'id', 'es', 'fr', 'de', 'ja', 'zh', 'ar', 'hi', 'ru', 'ko', 'it']
  for (const locale of majorLocales) {
    expect(locales.includes(locale)).toBe(expectedTrue)
  }
})

Deno.test('Locale: getAvailableLocales - should contain all registered locales', () => {
  const locales = Locale.getAvailableLocales()
  const hasEn = locales.includes('en')
  const hasId = locales.includes('id')
  const hasEs = locales.includes('es')
  expect(hasEn).toBe(expectedTrue)
  expect(hasId).toBe(expectedTrue)
  expect(hasEs).toBe(expectedTrue)
})
