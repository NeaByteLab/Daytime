import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
  site: 'https://docs-daytime.neabyte.com',
  output: 'static',
  integrations: [
    starlight({
      customCss: ['./src/styles/custom.css'],
      title: 'Daytime',
      description: 'Modern date library with chainable methods and rich formatting options',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/NeaByteLab/Daytime'
        },
        {
          icon: 'npm',
          label: 'npm',
          href: 'https://www.npmjs.com/package/@neabyte/daytime'
        },
        {
          icon: 'jsr',
          label: 'JSR',
          href: 'https://jsr.io/@neabyte/daytime'
        }
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' }
          ]
        },
        {
          label: 'Guides',
          items: [
            { label: 'Formatting', slug: 'guides/formatting' },
            { label: 'Component Getters', slug: 'guides/component-getters' },
            { label: 'Manipulation', slug: 'guides/manipulation' },
            { label: 'Query Methods', slug: 'guides/query-methods' },
            { label: 'Conversions', slug: 'guides/conversions' },
            { label: 'Chaining', slug: 'guides/chaining' },
            { label: 'Relative Time', slug: 'guides/relative-time' },
            { label: 'Locales', slug: 'guides/locales' },
            { label: 'Business Days', slug: 'guides/business-days' },
            { label: 'Weekdays', slug: 'guides/weekdays' },
            { label: 'Timezone', slug: 'guides/timezone' },
            { label: 'ISO Weeks', slug: 'guides/iso-weeks' },
            { label: 'Calendar Collections', slug: 'guides/calendar-collections' }
          ]
        },
        {
          label: 'API Reference',
          autogenerate: { directory: 'api' }
        }
      ],
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en'
        }
      }
    })
  ]
})
