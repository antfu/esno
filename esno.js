#!/usr/bin/env node

const { execSync, execFileSync } = require('child_process')
const path = require('path')
const { existsSync } = require('fs')

const local = existsSync(path.join(__dirname, 'node_modules'))

const esm = local
  ? path.join(__dirname, 'node_modules', 'esm', 'index.js')
  : path.join(__dirname, '..', 'esm', 'index.js')

const register = local
  ? path.join(__dirname, 'node_modules', 'esm', 'index.js')
  : path.join(__dirname, '..', 'esbuild-register', 'register.js')

const argv = process.argv
  .slice(2)
  .map((i) => `"${i}"`)
  .join(' ')

execSync(`node -r ${esm} -r ${register} ${argv}`, { stdio: 'inherit' })
