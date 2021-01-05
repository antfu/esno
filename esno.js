#!/usr/bin/env node

const { execSync } = require('child_process')

const register = require.resolve('esbuild-register')

const argv = process.argv
  .slice(2)
  .map((i) => `"${i}"`)
  .join(' ')

execSync(`node -r ${register} ${argv}`, { stdio: 'inherit' })
