---
title: Installation
description: Install Daytime in your Deno, Node.js, or browser project
---

Daytime can be installed via npm, Deno, or CDN.

## npm / Node.js

```bash
npm install @neabyte/daytime
```

```typescript
import daytime from '@neabyte/daytime'

const date = daytime()
console.log(date.format('YYYY-MM-DD'))
```

## Deno

```bash
deno add jsr:@neabyte/daytime
```

```typescript
import daytime from '@neabyte/daytime'

const date = daytime()
console.log(date.format('YYYY-MM-DD'))
```

### Import Map (deno.json)

```json
{
  "imports": {
    "@neabyte/daytime": "jsr:@neabyte/daytime"
  }
}
```

## Browser / CDN

```html
<script type="module">
  import daytime from 'https://esm.sh/@neabyte/daytime'

  const date = daytime()
  console.log(date.format('YYYY-MM-DD'))
</script>
```

