/**
 * Clamps quarter number to valid range (1-4).
 * @param quarter - The quarter number to clamp
 * @returns Clamped quarter number (1-4)
 */
export function clampQuarter(quarter: number): number {
  return Math.max(1, Math.min(4, quarter))
}

/**
 * Gets the end month number (0-11) for the given quarter.
 * @param quarter - The quarter number (1-4)
 * @returns The end month number (0-11)
 */
export function getQuarterEndMonth(quarter: number): number {
  return (quarter - 1) * 3 + 2
}

/**
 * Gets the quarter number (1-4) for the given date.
 * @param date - The date to get quarter for
 * @returns The quarter number (1-4)
 */
export function getQuarterNumber(date: Date): number {
  return Math.floor(date.getMonth() / 3) + 1
}

/**
 * Gets the start month number (0-11) for the given quarter.
 * @param quarter - The quarter number (1-4)
 * @returns The start month number (0-11)
 */
export function getQuarterStartMonth(quarter: number): number {
  return (quarter - 1) * 3
}

/**
 * Gets the start month number (0-11) of the quarter for the given date.
 * @param date - The date to get quarter start month for
 * @returns The start month number (0-11)
 */
export function getQuarterStartMonthFromDate(date: Date): number {
  return Math.floor(date.getMonth() / 3) * 3
}
