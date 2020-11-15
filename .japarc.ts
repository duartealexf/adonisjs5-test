import 'reflect-metadata'
import { join } from 'path'

import { configure } from 'japa'
import sourceMapSupport from 'source-map-support'

process.env.NODE_ENV = 'testing'
process.env.ADONIS_ACE_CWD = join(__dirname)

sourceMapSupport.install({ handleUncaughtExceptions: false })

/**
 * Configure test runner
 */
configure({
  files: ['tests/**/*.spec.ts'],
})
