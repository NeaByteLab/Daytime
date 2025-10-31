import { defineBuildConfig } from 'unbuild'
import { resolve } from 'node:path'

/**
 * Build configuration for the Daytime library.
 * @description Configures build settings, aliases, and output options.
 */
export default defineBuildConfig({
  /** The entry points for the build */
  entries: ['src/Main'],
  /** Whether to generate declaration files */
  declaration: true,
  /** Whether to clean the build output */
  clean: true,
  /** Aliases for the build */
  alias: {
    '@app': resolve(__dirname, 'src'),
    '@locale': resolve(__dirname, 'src/locale'),
    '@helpers': resolve(__dirname, 'src/helpers'),
    '@utils': resolve(__dirname, 'src/utils')
  },
  /** Rollup configuration for the build */
  rollup: {
    /** Whether to emit CommonJS modules */
    emitCJS: true,
    /** Whether to inline dependencies */
    inlineDependencies: true
  },
  /** Whether to generate source maps */
  sourcemap: false,
  /** Whether to fail on warnings */
  failOnWarn: false
})
