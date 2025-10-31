import type * as Types from '@app/Types.ts'
import { Daytime } from '@app/Daytime.ts'

/**
 * Factory function to create a Daytime instance.
 * @description Creates a new Daytime instance from the given date input.
 * @param date - Optional date input (Date, number, string, or object with toDate method)
 * @returns A new Daytime instance
 */
export default function daytime(date?: Types.DateInput): Daytime {
  return new Daytime(date)
}

/**
 * Re-exports all type definitions for external use.
 * @description Makes all Types module exports available through the main entry point.
 */
export * from '@app/Types.ts'
