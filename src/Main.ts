import type * as Types from '@app/Types.ts'
import * as Locale from '@locale/index.ts'
import { Daytime } from '@app/Daytime.ts'

/**
 * Factory function to create a Daytime instance.
 * @description Creates a new Daytime instance from the given date input.
 * @param date - Optional date input (Date, number, string, or object with toDate method)
 * @param localeCode - Optional locale code (defaults to default locale)
 * @returns A new Daytime instance
 */
function daytime(date?: Types.DateInput, localeCode?: Types.LocaleCode): Daytime {
  return new Daytime(date, localeCode)
}

/**
 * Sets the default locale for all new Daytime instances.
 * @param code - The locale code to set as default
 */
daytime.setDefaultLocale = (code: Types.LocaleCode): void => {
  Locale.setDefaultLocale(code)
}

/**
 * Gets the default locale code.
 * @returns The default locale code
 */
daytime.getDefaultLocale = (): string => {
  return Locale.getDefaultLocale()
}

/**
 * Gets all available locale codes.
 * @returns Array of available locale codes
 */
daytime.getAvailableLocales = (): string[] => {
  return Locale.getAvailableLocales()
}

/**
 * Exports the daytime function as the default export.
 * @returns The daytime function
 */
export default daytime

/**
 * Re-exports all type definitions for external use.
 * @description Makes all Types module exports available through the main entry point.
 */
export * from '@app/Types.ts'
