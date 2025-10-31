/**
 * Pads a number with leading zeros to the specified length.
 * @param num - The number to pad
 * @param length - The desired length of the padded string
 * @returns The padded string representation of the number
 */
export function padNumber(num: number, length: number): string {
  return num.toString().padStart(length, '0')
}
