/**
 * Pads a number with leading zeros to the specified length.
 * @param num - The number to pad
 * @param length - The desired length of the padded string
 * @returns The padded string representation of the number
 */
export function padNumber(num: number, length: number): string {
  return num.toString().padStart(length, '0')
}

/**
 * Converts a number to its ordinal form (1st, 2nd, 3rd, etc.).
 * @param num - The number to convert to ordinal
 * @returns The ordinal string representation
 */
export function toOrdinal(num: number): string {
  const numStr = num.toString()
  const lastDigit = numStr[numStr.length - 1]
  const lastTwoDigits = numStr.slice(-2)
  if (lastTwoDigits === '11' || lastTwoDigits === '12' || lastTwoDigits === '13') {
    return `${numStr}th`
  }
  if (lastDigit === '1') {
    return `${numStr}st`
  }
  if (lastDigit === '2') {
    return `${numStr}nd`
  }
  if (lastDigit === '3') {
    return `${numStr}rd`
  }
  return `${numStr}th`
}
