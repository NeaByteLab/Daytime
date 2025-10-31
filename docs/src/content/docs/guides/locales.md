---
title: Locales
description: Internationalization support with 103 locales
---

103 locales are available. Format dates in different languages and cultural conventions.

## Setting Locale

### Instance Locale

Set locale for a specific instance. Affects month names, day names, and ordinal formatting:

```typescript
const date = daytime('2025-11-15T14:30:45Z')

// English (default)
date.locale('en').format('dddd, MMMM Do YYYY')
// "Saturday, November 15th 2025"

// Indonesian
date.locale('id').format('dddd, MMMM Do YYYY')
// "Sabtu, November 15th 2025"

// Japanese
date.locale('ja').format('dddd, MMMM Do YYYY')
// "土曜日, 11月 15th 2025"
```

### Get Current Locale

```typescript
const date = daytime('2025-11-15').locale('id')
const currentLocale = date.locale()
// "id"
```

### Default Locale

Set default locale for all new instances. Existing instances are not affected:

```typescript
// Set default locale
daytime.setDefaultLocale('id')

// Now all new instances use Indonesian
daytime('2025-11-15').format('dddd')
// "Sabtu"

// Get default locale
const defaultLocale = daytime.getDefaultLocale()
// "id"
```

## Available Locales

Get list of all available locales:

```typescript
const locales = daytime.getAvailableLocales()
console.log(locales.length)
// 103

console.log(locales)
// ["en", "id", "ja", "fr", "de", "es", ...]
```

## Supported Locales

Daytime supports 103 locales including:

### Major Languages

- **English** (`en`) - English
- **Indonesian** (`id`) - Bahasa Indonesia
- **Japanese** (`ja`) - 日本語
- **French** (`fr`) - Français
- **German** (`de`) - Deutsch
- **Spanish** (`es`) - Español
- **Portuguese** (`pt`) - Português
- **Russian** (`ru`) - Русский
- **Chinese** (`zh`) - 中文
- **Korean** (`ko`) - 한국어
- **Italian** (`it`) - Italiano
- **Dutch** (`nl`) - Nederlands
- **Arabic** (`ar`) - العربية
- **Hindi** (`hi`) - हिन्दी
- And 89 more...

## Locale-Aware Formatting

Locales affect month and day names:

```typescript
const date = daytime('2025-11-15T14:30:45Z')

// English
date.locale('en').format('dddd, MMMM Do YYYY')
// "Saturday, November 15th 2025"

// Indonesian
date.locale('id').format('dddd, MMMM Do YYYY')
// "Sabtu, November 15th 2025"

// Japanese
date.locale('ja').format('dddd, MMMM Do YYYY')
// "土曜日, 11月 15th 2025"

// French
date.locale('fr').format('dddd, MMMM Do YYYY')
// "Samedi, Novembre 15th 2025"

// German
date.locale('de').format('dddd, MMMM Do YYYY')
// "Samstag, November 15th 2025"
```

## Format Tokens Affected by Locale

These format tokens are locale-aware:

- `dddd` - Full day name (Saturday, Sabtu, 土曜日)
- `ddd` - Short day name (Sat, Sab, 土)
- `MMMM` - Full month name (November, November, 11月)
- `MMM` - Short month name (Nov, Nov, 11月)

Other tokens remain the same across locales:

- `YYYY`, `YY` - Year
- `MM`, `M` - Month number
- `DD`, `D`, `Do` - Day
- `HH`, `H`, `hh`, `h` - Hour
- `mm`, `m` - Minute
- `ss`, `s` - Second

## Examples

### Multi-Language Date Display

```typescript
function formatDateForLocale(date: Daytime, locale: string): string {
  return date.locale(locale).format('dddd, MMMM Do YYYY')
}

const date = daytime('2025-11-15')
formatDateForLocale(date, 'en')
// "Saturday, November 15th 2025"

formatDateForLocale(date, 'id')
// "Sabtu, November 15th 2025"

formatDateForLocale(date, 'ja')
// "土曜日, 11月 15th 2025"
```

### User Preference-Based Formatting

```typescript
function getUserLocale(): string {
  // Get from user settings, browser, etc.
  return localStorage.getItem('locale') || 'en'
}

const date = daytime('2025-11-15')
const userLocale = getUserLocale()
console.log(date.locale(userLocale).format('dddd, MMMM Do YYYY'))
// Output depends on userLocale setting
```

### Application-Wide Locale

```typescript
// Set default locale at app startup
daytime.setDefaultLocale('id')

// All instances now use Indonesian
daytime('2025-11-15').format('dddd')
// "Sabtu"

daytime('2025-11-16').format('dddd')
// "Minggu"
```

### Locale Selection UI

```typescript
const supportedLocales = [
  { code: 'en', name: 'English' },
  { code: 'id', name: 'Bahasa Indonesia' },
  { code: 'ja', name: '日本語' },
  { code: 'fr', name: 'Français' }
]

function formatWithSelectedLocale(date: Daytime, localeCode: string): string {
  return date.locale(localeCode).format('dddd, MMMM Do YYYY')
}

const date = daytime('2025-11-15')
supportedLocales.forEach(locale => {
  console.log(`${locale.name}: ${formatWithSelectedLocale(date, locale.code)}`)
})
// English: Saturday, November 15th 2025
// Bahasa Indonesia: Sabtu, November 15th 2025
// 日本語: 土曜日, 11月 15th 2025
// Français: Samedi, Novembre 15th 2025
```

## Locale Code Format

Locale codes follow the ISO 639-1 standard (2-letter language codes):

- `en` - English
- `id` - Indonesian
- `ja` - Japanese
- `fr` - French
- `de` - German
- etc.

## Locale Persistence

Locale is preserved when chaining:

```typescript
const date = daytime('2025-11-15')
  .locale('id')
  .add(1, 'day')
  .add(1, 'month')
  .format('dddd, MMMM')

// Still uses Indonesian locale
console.log(date)
// "Minggu, Desember"
```

## Complete Locale List

To see all 103 available locales, call:

```typescript
const allLocales = daytime.getAvailableLocales()
console.log(allLocales)
// Complete list of all supported locale codes
```

