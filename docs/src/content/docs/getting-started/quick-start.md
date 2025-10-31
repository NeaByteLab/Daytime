---
title: Quick Start
description: Get started with Daytime
---

## Basic Usage

```typescript
import daytime from '@neabyte/daytime'

// Create and format
const date = daytime('2025-11-15T14:30:45Z')
console.log(date.format('YYYY-MM-DD Do dddd'))
// "2025-11-15 15th Saturday"

// Locale support
console.log(date.locale('en').format('dddd, MMMM Do YYYY'))
// "Saturday, November 15th 2025"

// Chain operations
const result = date
  .add(3, 'month')
  .subtract(5, 'day')
  .startOf('week')
  .nextBusinessDay()
  .format('YYYY-MM-DD dddd')
console.log(result)
// "2026-02-09 Monday"
```
