# Daytime [![Module type: CJS+ESM](https://img.shields.io/badge/module%20type-cjs%2Besm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm) [![npm version](https://img.shields.io/npm/v/@neabyte/daytime.svg)](https://www.npmjs.org/package/@neabyte/daytime) [![JSR](https://jsr.io/badges/@neabyte/daytime)](https://jsr.io/@neabyte/daytime) [![Node.js CI](https://github.com/NeaByteLab/Daytime/actions/workflows/ci.yaml/badge.svg)](https://github.com/NeaByteLab/Daytime)

**Modern date library with chainable methods and rich formatting options.**

The library is available as **CJS**, **ESM**, and **JSR** packages. You can install it via npm, Deno, or CDN.

## Installation

> Ready to get started? Follow our [step-by-step installation guide](https://docs-daytime.neabyte.com/getting-started/installation/) to set up **Daytime**.

```bash
npm install @neabyte/daytime
```

## Example Usage

```typescript
import daytime from '@neabyte/daytime'

const date = daytime('2077-01-01')
console.log(date.format('YYYY-MM-DD Do dddd'))
// "2077-01-01 1st Friday"

console.log(date.add(1, 'year').format('dddd, DD-MM-YYYY [at] HH:mm:ss'))
// "Saturday, 01-01-2078 [at] 07:00:00"

console.log(date.getDaysInMonth().map(day => day.format('YYYY-MM-DD Do dddd')))
// [
//   '2077-01-01 1st Friday',
//   '2077-01-02 2nd Saturday',
//   '2077-01-03 3rd Sunday',
//   '2077-01-04 4th Monday',
//   '2077-01-05 5th Tuesday',
//   '2077-01-06 6th Wednesday',
//   '2077-01-07 7th Thursday',
//   '2077-01-08 8th Friday',
//   '2077-01-09 9th Saturday',
//   ...
// ]
```

## Documentation

See the [official documentation](https://docs-daytime.neabyte.com) for more details about the library.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
