#!/usr/bin/env node

const execa = require('execa')

const register = require.resolve('esbuild-register')

const argv = process.argv
  .slice(2)
  .map((i) => `"${i}"`)
  .join(' ')

execa.commandSync(`node -r ${register} ${argv}`, { stdio: 'inherit', stderr: 'inherit' })
